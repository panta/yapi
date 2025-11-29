import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import { existsSync } from "fs";
import path from "path";

const execAsync = promisify(exec);

export async function GET() {
  // Determine test directory based on environment
  const dockerTestPath = "/usr/local/bin/test";
  const localTestPath = path.resolve(process.cwd(), "../test");
  const testPath = existsSync(dockerTestPath) ? dockerTestPath : localTestPath;

  if (!existsSync(testPath)) {
    return NextResponse.json(
      {
        status: "error",
        message: `Test directory not found. Checked: ${dockerTestPath}, ${localTestPath}`,
      },
      { status: 500 }
    );
  }

  try {
    // Determine SCRIPT_DIR for tests (parent of test directory)
    const scriptDir = path.dirname(testPath);

    // Run the bats tests - assume bats is on PATH
    const { stdout, stderr } = await execAsync(
      `bats "${testPath}"/*.bats`,
      {
        maxBuffer: 1024 * 1024 * 10, // 10MB buffer for test output
        cwd: scriptDir,
        env: {
          ...process.env,
          PATH: process.env.PATH || "/usr/local/bin:/usr/bin:/bin",
        },
      }
    );

    // Parse the output to extract test results
    const output = stdout || stderr;
    const lines = output.split("\n");

    // Extract test summary
    const testResults = {
      status: "ok",
      output: output,
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
      },
      tests: [] as Array<{ name: string; status: string }>,
    };

    // Parse bats output format
    lines.forEach((line) => {
      // Match test result lines like "ok 1 test name" or "not ok 1 test name"
      const okMatch = line.match(/^ok\s+\d+\s+(.+)$/);
      const notOkMatch = line.match(/^not ok\s+\d+\s+(.+)$/);

      if (okMatch) {
        testResults.summary.passed++;
        testResults.summary.total++;
        testResults.tests.push({
          name: okMatch[1],
          status: "passed",
        });
      } else if (notOkMatch) {
        testResults.summary.failed++;
        testResults.summary.total++;
        testResults.tests.push({
          name: notOkMatch[1],
          status: "failed",
        });
      }
    });

    return NextResponse.json(testResults, { status: 200 });
  } catch (error: any) {
    // If tests fail, the exec will throw an error
    // but we still want to return the output
    const output = error.stdout || error.stderr || error.message;
    const lines = output.split("\n");

    const testResults = {
      status: "error",
      output: output,
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
      },
      tests: [] as Array<{ name: string; status: string }>,
    };

    // Parse the output even on failure
    lines.forEach((line: string) => {
      const okMatch = line.match(/^ok\s+\d+\s+(.+)$/);
      const notOkMatch = line.match(/^not ok\s+\d+\s+(.+)$/);

      if (okMatch) {
        testResults.summary.passed++;
        testResults.summary.total++;
        testResults.tests.push({
          name: okMatch[1],
          status: "passed",
        });
      } else if (notOkMatch) {
        testResults.summary.failed++;
        testResults.summary.total++;
        testResults.tests.push({
          name: notOkMatch[1],
          status: "failed",
        });
      }
    });

    return NextResponse.json(testResults, { status: 500 });
  }
}
