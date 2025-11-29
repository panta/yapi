"use client";

import { useState } from "react";
import Editor from "./Editor";
import OutputPanel from "./OutputPanel";
import type { ExecuteResponse } from "../types/api-contract";

const DEFAULT_YAML = `url: https://api.github.com/users/octocat
method: GET
`;

export default function Playground() {
  const [yaml, setYaml] = useState(DEFAULT_YAML);
  const [result, setResult] = useState<ExecuteResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleRun() {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ yaml }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
        errorType: "NETWORK_ERROR",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-yapi-bg">
      {/* Header */}
      <header className="border-b border-yapi-border-dark bg-gradient-to-r from-orange-100 to-orange-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-mono text-yapi-fg">
                yapi playground
              </h1>
              <p className="text-sm text-yapi-fg/60 mt-1">
                compiler explorer for APIs
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yourusername/yapi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-yapi-fg/60 hover:text-yapi-fg transition-colors"
              >
                docs
              </a>
              <button className="px-4 py-2 text-sm font-medium text-yapi-fg border border-yapi-border-dark rounded hover:bg-orange-50 transition-colors">
                share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Split Pane */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Editor */}
        <div className="w-1/2 border-r border-yapi-border-dark">
          <Editor value={yaml} onChange={setYaml} onRun={handleRun} />
        </div>

        {/* Right Panel - Output */}
        <div className="w-1/2">
          <OutputPanel result={result} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
