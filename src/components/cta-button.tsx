"use client";

import { useEffect } from "react";

export function CtaButton() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target instanceof HTMLElement && e.target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "s" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        window.location.href = "https://app.usespara.com";
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <a
      href="https://app.usespara.com"
      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 transition-colors"
    >
      Get started — it&apos;s free
      <kbd className="pointer-events-none inline-flex h-4 items-center rounded border border-primary-foreground/20 bg-primary-foreground/10 px-1 font-mono text-[10px] font-medium">
        S
      </kbd>
    </a>
  );
}
