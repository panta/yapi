// app/Editor.tsx
"use client";

import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { configureMonacoYaml } from "monaco-yaml";

// Simple guard so we only wire YAML services once
let yamlConfigured = false;

export default function YamlEditor() {
  // Ref to the DOM node Monaco will render into
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Ref to keep the editor instance (avoid double init, allow dispose)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // If React re-runs the effect (StrictMode), do not re-create the editor
    if (editorRef.current) return;

    // Configure workers once; Monaco uses this to spawn background workers
    if (typeof window !== "undefined" && !(window as any).MonacoEnvironment) {
      (window as any).MonacoEnvironment = {
        getWorker(_id: string, label: string) {
          // Use YAML worker for yaml language
          if (label === "yaml") {
            return new Worker(
              // Depending on your bundler you might need "yaml.worker.js"
              new URL("monaco-yaml/yaml.worker", import.meta.url),
              { type: "module" }
            );
          }

          // Fallback to default Monaco editor worker for everything else
          return new Worker(
            new URL(
              "monaco-editor/esm/vs/editor/editor.worker",
              import.meta.url
            ),
            { type: "module" }
          );
        },
      };
    }

    // Create a YAML model; URI is just a fake file name
    const model = monaco.editor.createModel(
      "foo: bar\nbar: 42\n",
      "yaml",
      monaco.Uri.parse("file:///example.yaml")
    );

    // Create the editor instance
    editorRef.current = monaco.editor.create(container, {
      model,
      automaticLayout: true,
      minimap: { enabled: false },
    });

    // Configure YAML validation / completion once per app
    if (!yamlConfigured) {
      configureMonacoYaml(monaco, {
        // Basic LSP-ish features
        validate: true,
        hover: true,
        completion: true,
        format: true,
        enableSchemaRequest: true, // turn true if you want remote schemas

        // Here you wire your JSON schema(s)
        schemas: [
          {
            uri: "https://pond.audio/yapi/schema", // any unique URI
            fileMatch: ["*"], // match all YAML models; adjust as needed
          },
        ],
      });

      yamlConfigured = true;
    }

    // Cleanup on unmount
    return () => {
      editorRef.current?.dispose();
      editorRef.current = null;
      model.dispose();
    };
  }, []);

  // Container for Monaco
  return <div ref={containerRef} style={{ width: "100%", height: 400 }} />;
}


