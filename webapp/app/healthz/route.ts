import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const dependsPath = path.resolve(process.cwd(), ".depends");
  try {
    const fileContent = await fs.readFile(dependsPath, "utf-8");
    const dependencies = fileContent
      .split("\n")
      .filter((line) => line.trim() !== "" && !line.startsWith("#"));

    const statuses = await Promise.all(
      dependencies.map((dep) => {
        return new Promise((resolve) => {
          exec(`which ${dep}`, (error) => {
            resolve({
              dependency: dep,
              status: error ? "missing" : "ok",
            });
          });
        });
      })
    );

    const allOk = statuses.every((s: any) => s.status === "ok");

    return NextResponse.json(
      {
        status: allOk ? "ok" : "error",
        dependencies: statuses,
      },
      { status: allOk ? 200 : 500 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Could not read .depends file",
      },
      { status: 500 }
    );
  }
}
