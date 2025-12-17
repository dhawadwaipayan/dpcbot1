"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";
import {
  WORKFLOW_ID,
  WORKFLOW_ID_COSTING,
  WORKFLOW_ID_FABRIC,
  WORKFLOW_ID_INFO,
} from "@/lib/config";

type WorkflowOption = {
  id: string;
  label: string;
  key: "info" | "fabric" | "costing" | "default";
};

export default function App() {
  const scheme: ColorScheme = "light";

  const workflowOptions = useMemo<WorkflowOption[]>(() => {
    const options: WorkflowOption[] = [
      { id: WORKFLOW_ID_INFO, label: "Info", key: "info" },
      { id: WORKFLOW_ID_FABRIC, label: "Fabric", key: "fabric" },
      { id: WORKFLOW_ID_COSTING, label: "Costing", key: "costing" },
      { id: WORKFLOW_ID, label: "Default", key: "default" },
    ];
    return options.filter(
      (option): option is WorkflowOption => Boolean(option.id)
    );
  }, []);

  const [workflowId, setWorkflowId] = useState<string>(() => {
    return workflowOptions[0]?.id ?? "";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.dataset.colorScheme = "light";
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, []);

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-transparent px-4 py-6">
      <div className="mx-auto mb-4 flex w-full max-w-5xl flex-wrap items-center justify-end gap-2">
        {workflowOptions.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setWorkflowId(option.id)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
              workflowId === option.id
                ? "border-slate-800 bg-slate-800 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={() => {
            /* light-only */
          }}
          workflowId={workflowId}
        />
      </div>
    </main>
  );
}
