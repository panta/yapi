"use client";

import MonacoEditor, { Monaco, BeforeMount, loader } from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
import type { editor } from "monaco-editor";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

const VIM_MODE_KEY = "yapi-vim-mode";

export default function Editor({ value, onChange, onRun }: EditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const onRunRef = useRef(onRun);
  const vimModeRef = useRef<any>(null);

  const [vimEnabled, setVimEnabled] = useState(() => {
    // Load vim mode preference from localStorage on mount
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(VIM_MODE_KEY);
      return stored === "true";
    }
    return false;
  });

  // Keep the ref updated with the latest onRun callback
  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  // Save vim mode preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(VIM_MODE_KEY, String(vimEnabled));
    }
  }, [vimEnabled]);

  // Toggle vim mode on/off
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const enableVimMode = async () => {
      if (vimEnabled && !vimModeRef.current) {
        const { initVimMode } = await import("monaco-vim");
        const statusNode = document.getElementById("vim-status");
        vimModeRef.current = initVimMode(
          editorRef.current!,
          statusNode || undefined
        );
      } else if (!vimEnabled && vimModeRef.current) {
        vimModeRef.current.dispose();
        vimModeRef.current = null;
      }
    };

    enableVimMode();
  }, [vimEnabled]);

  const handleEditorWillMount: BeforeMount = async (monaco) => {
    // Define custom theme with orange cursor
    monaco.editor.defineTheme("yapi-light", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editorCursor.foreground": "#f97316",
        "editor.lineHighlightBackground": "#fff8f0",
        "editor.selectionBackground": "#fed7aa80",
        "editor.inactiveSelectionBackground": "#ffedd580",
      },
    });

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

  async function handleEditorDidMount(
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

    // Initialize vim mode if enabled
    if (vimEnabled && !vimModeRef.current) {
      const { initVimMode } = await import("monaco-vim");
      const statusNode = document.getElementById("vim-status");
      vimModeRef.current = initVimMode(editor, statusNode || undefined);
    }
  }


  return (
    <div className="h-full flex flex-col bg-yapi-editor">
      <div className="flex items-center justify-between px-4 py-2 border-b border-yapi-border bg-orange-50/30">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-mono font-semibold text-yapi-fg">
            yapi.yaml
          </h2>
          <button
            onClick={() => setVimEnabled(!vimEnabled)}
            className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
              vimEnabled
                ? "bg-yapi-accent text-white"
                : "bg-orange-100 text-yapi-fg/60 hover:bg-orange-200"
            }`}
            title="Toggle Vim mode"
          >
            vim
          </button>
        </div>
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
          theme="yapi-light"
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
      {vimEnabled && (
        <div className="px-4 py-1 border-t border-yapi-border bg-orange-50/50">
          <div
            id="vim-status"
            className="text-xs font-mono text-yapi-fg/60"
          />
        </div>
      )}
    </div>
  );
}
