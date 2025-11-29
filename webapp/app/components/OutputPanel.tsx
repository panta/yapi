"use client";

import { useState } from "react";
import type { ExecuteResponse } from "../types/api-contract";
import { isSuccessResponse } from "../types/api-contract";

interface OutputPanelProps {
  result: ExecuteResponse | null;
  isLoading: boolean;
}

export default function OutputPanel({ result, isLoading }: OutputPanelProps) {
  const [activeTab, setActiveTab] = useState<"response" | "headers">("response");

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-yapi-output">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-yapi-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-yapi-fg/60 font-mono">Executing request...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="h-full flex items-center justify-center bg-yapi-output">
        <div className="text-center text-yapi-fg/40">
          <p className="text-sm font-mono">Press ⌘↵ to run your API request</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-yapi-output">
      {/* Curl Command Section */}
      <div className="border-b border-yapi-border">
        <div className="px-4 py-2 bg-yellow-50">
          <h3 className="text-xs font-semibold text-yapi-fg/60 uppercase tracking-wide mb-2">
            Equivalent Command
          </h3>
          {result.curlCommand ? (
            <div className="bg-yapi-editor border border-yapi-border rounded p-3 overflow-x-auto">
              <code className="text-xs font-mono text-yapi-fg whitespace-pre">
                {result.curlCommand}
              </code>
            </div>
          ) : (
            <div className="bg-yapi-editor border border-yapi-border rounded p-3">
              <code className="text-xs font-mono text-yapi-fg/40">
                No curl command generated
              </code>
            </div>
          )}
        </div>
      </div>

      {/* Response Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-4 px-4 py-2 border-b border-yapi-border bg-yellow-50">
          <h3 className="text-xs font-semibold text-yapi-fg/60 uppercase tracking-wide">
            Response
          </h3>
          {isSuccessResponse(result) && (
            <div className="flex items-center gap-3 ml-auto">
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded ${
                  result.statusCode >= 200 && result.statusCode < 300
                    ? "bg-green-100 text-green-700"
                    : result.statusCode >= 400
                    ? "bg-red-100 text-red-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {result.statusCode}
              </span>
              <span className="text-xs text-yapi-fg/60 font-mono">
                {result.timing}ms
              </span>
            </div>
          )}
        </div>

        {/* Tabs */}
        {isSuccessResponse(result) && (
          <div className="flex gap-2 px-4 py-2 border-b border-yapi-border bg-yapi-editor">
            <button
              onClick={() => setActiveTab("response")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                activeTab === "response"
                  ? "bg-yapi-accent text-white"
                  : "text-yapi-fg/60 hover:text-yapi-fg hover:bg-yellow-50"
              }`}
            >
              Body
            </button>
            <button
              onClick={() => setActiveTab("headers")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                activeTab === "headers"
                  ? "bg-yapi-accent text-white"
                  : "text-yapi-fg/60 hover:text-yapi-fg hover:bg-yellow-50"
              }`}
            >
              Headers
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {isSuccessResponse(result) ? (
            <>
              {activeTab === "response" && (
                <pre className="text-sm font-mono text-yapi-fg whitespace-pre-wrap break-words">
                  {JSON.stringify(result.responseBody, null, 2)}
                </pre>
              )}
              {activeTab === "headers" && (
                <div className="space-y-1">
                  {Object.entries(result.responseHeaders).map(([key, value]) => (
                    <div key={key} className="flex gap-2">
                      <span className="text-sm font-mono font-semibold text-yapi-accent">
                        {key}:
                      </span>
                      <span className="text-sm font-mono text-yapi-fg">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-lg">⚠️</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-red-700 mb-1">
                    {result.errorType}
                  </h4>
                  <p className="text-sm text-red-600">{result.error}</p>
                  {!!result.details && (
                    <pre className="mt-2 text-xs font-mono text-red-500 whitespace-pre-wrap">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
