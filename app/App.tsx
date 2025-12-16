"use client";

import { useCallback, useEffect } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const scheme: ColorScheme = "light";

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
    <main className="relative flex min-h-screen items-center justify-center bg-[#e9eef5] px-4 py-16 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,91,187,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,37,95,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(0,37,95,0.05),transparent_35%)]" />
      <div className="relative w-full max-w-6xl">
        <div className="mx-auto w-full max-w-4xl rounded-[32px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10">
          <ChatKitPanel
            theme={scheme}
            onWidgetAction={handleWidgetAction}
            onResponseEnd={handleResponseEnd}
            onThemeRequest={() => {
              /* light-only */
            }}
          />
        </div>
      </div>
    </main>
  );
}
