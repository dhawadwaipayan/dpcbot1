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
    <main className="relative flex min-h-screen items-center justify-center bg-[#f4f7fb] px-4 py-14 sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(0,64,160,0.07),transparent_32%),radial-gradient(circle_at_78%_14%,rgba(0,48,120,0.06),transparent_30%),radial-gradient(circle_at_50%_78%,rgba(0,64,160,0.04),transparent_34%)]" />
      <div className="relative w-full max-w-5xl">
        <div className="mx-auto w-full max-w-4xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)] sm:p-9 lg:p-10">
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
