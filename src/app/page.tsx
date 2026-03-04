import { FloatingIcons } from "@/components/floating-icons";
import { CtaButton } from "@/components/cta-button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-center mb-20 sm:mb-28">
        <FloatingIcons />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Your personal link library
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          Save links, read them later in a clean reader view, organize with
          tags, and share your favorites.
        </p>
        <div className="mt-8">
          <CtaButton />
        </div>
      </section>

      {/* Features */}
      <section className="mb-20 sm:mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Save links */}
          <div className="rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground shrink-0"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <h3 className="text-sm font-medium text-foreground">
                Save links with one click
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Paste a URL and Spara automatically fetches the title and
              preview image. Add tags to keep things organized.
            </p>
          </div>

          {/* Reader mode */}
          <div className="rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground shrink-0"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="11" x2="16" y2="11" />
                <line x1="8" y1="15" x2="12" y2="15" />
              </svg>
              <h3 className="text-sm font-medium text-foreground">
                Reader mode
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Read articles in a clean, distraction-free view. No ads, no
              clutter — just the content.
            </p>
          </div>

          {/* Organize with tags */}
          <div className="rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground shrink-0"
              >
                <path d="M12 2l7 7-7.5 7.5a2 2 0 0 1-2.8 0L2 9.8V4a2 2 0 0 1 2-2h6z" />
                <circle cx="7" cy="7" r="1" />
              </svg>
              <h3 className="text-sm font-medium text-foreground">
                Organize with tags
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create tags, filter by them, and find what you need instantly.
              Simple and fast.
            </p>
          </div>

          {/* Share favorites */}
          <div className="rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground shrink-0"
              >
                <path d="M12 3v13M7 8l5-5 5 5M20 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
              </svg>
              <h3 className="text-sm font-medium text-foreground">
                Share your favorites
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Star your best links and share a public page of your favorites
              with anyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
