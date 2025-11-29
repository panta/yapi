// app/components/Editor.tsx

"use client";

import MonacoEditor, { Monaco, BeforeMount } from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
import type { editor } from "monaco-editor";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

const VIM_MODE_KEY = "yapi-vim-mode";

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient ? <>{children}</> : null;
}

export default function Editor({ value, onChange, onRun }: EditorProps) {
  const [editorInstance, setEditorInstance] =
    useState<editor.IStandaloneCodeEditor | null>(null);
  const [monacoInstance, setMonacoInstance] = useState<Monaco | null>(null);
  const onRunRef = useRef(onRun);
  const vimModeRef = useRef<any>(null);
  const [vimEnabled, setVimEnabled] = useState(false);

  // load vim preference
  useEffect(() => {
    const stored = localStorage.getItem(VIM_MODE_KEY);
    setVimEnabled(stored === "true");
  }, []);

  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(VIM_MODE_KEY, String(vimEnabled));
    }
  }, [vimEnabled]);

  useEffect(() => {
    if (!editorInstance || !monacoInstance) return;

    const enableVimMode = async () => {
      if (vimEnabled && !vimModeRef.current) {
        const { initVimMode } = await import("monaco-vim");
        const statusNode = document.getElementById("vim-status");
        vimModeRef.current = initVimMode(editorInstance, statusNode || undefined);
      } else if (!vimEnabled && vimModeRef.current) {
        vimModeRef.current.dispose();
        vimModeRef.current = null;
      }
    };

    void enableVimMode();
  }, [vimEnabled, editorInstance, monacoInstance]);

  const handleEditorWillMount: BeforeMount = async (monaco) => {
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

    monaco.languages.register({
      id: "yaml",
      extensions: [".yaml", ".yml"],
      aliases: ["YAML", "yaml"],
      mimetypes: ["application/x-yaml"],
    });

    // monaco-yaml handles the worker and language client internally
    // Configure it through the yaml service configuration instead
  };

  async function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) {
    setEditorInstance(editor);
    setMonacoInstance(monaco);

    // run on Cmd/Ctrl + Enter
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      () => onRunRef.current(),
    );

    // format with Shift+Alt+F (uses monaco-yaml / Prettier)
    editor.addCommand(
      monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF,
      () => editor.getAction("editor.action.formatDocument")?.run(),
    );
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
          className="px-3 py-1 text-sm font-medium text-white bg-yapi-accent hover:byapi-accent-hover rounded-md transition-colors"
        >
          Run <span className="text-xs opacity-75">(⌘↵)</span>
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <ClientOnly>
          <MonacoEditor
            height="100%"
            defaultLanguage="yaml"
            // Give the model a path that matches fileMatch above
            path="yapi.yaml"
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
          {vimEnabled && (
            <div className="px-4 py-1 border-t border-yapi-border bg-orange-50/50">
              <div
                id="vim-status"
                className="text-xs font-mono text-yapi-fg/60"
              />
            </div>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
