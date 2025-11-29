"use client";

import MonacoEditor, { Monaco, BeforeMount, loader } from "@monaco-editor/react";
import { useRef, useEffect } from "react";
import type { editor } from "monaco-editor";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

export default function Editor({ value, onChange, onRun }: EditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const onRunRef = useRef(onRun);

  // Keep the ref updated with the latest onRun callback
  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  const handleEditorWillMount: BeforeMount = async (monaco) => {
    // Import and configure monaco-yaml
    const { configureMonacoYaml } = await import("monaco-yaml");

    configureMonacoYaml(monaco, {
      enableSchemaRequest: true,
      hover: true,
      completion: true,
      validate: true,
      format: true,
      schemas: [
        {
          uri: "https://pond.audio/yapi/schema",
          fileMatch: ["*"],
        },
      ],
    });
  };

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Add keyboard shortcut: Cmd+Enter or Ctrl+Enter to run
    // Use ref to always call the latest onRun callback
    editor.addCommand(
      // eslint-disable-next-line no-bitwise
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      () => {
        onRunRef.current();
      }
    );
  }


  return (
    <div className="h-full flex flex-col bg-yapi-editor">
      <div className="flex items-center justify-between px-4 py-2 border-b border-yapi-border bg-orange-50/30">
        <h2 className="text-sm font-mono font-semibold text-yapi-fg">
          yapi.yaml
        </h2>
        <button
          onClick={onRun}
          className="px-3 py-1 text-sm font-medium text-white bg-yapi-accent hover:bg-yapi-accent-hover rounded-md transition-colors"
        >
          Run <span className="text-xs opacity-75">(⌘↵)</span>
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <MonacoEditor
          height="100%"
          defaultLanguage="yaml"
          value={value}
          onChange={(newValue) => onChange(newValue || "")}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
            tabSize: 2,
            insertSpaces: true,
            fontFamily: "var(--font-geist-mono), Monaco, monospace",
            padding: { top: 16, bottom: 16 },
            renderLineHighlight: "all",
            bracketPairColorization: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
}
