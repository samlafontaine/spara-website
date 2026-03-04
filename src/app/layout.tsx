import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://usespara.com"),
  title: "Spara - Your personal link library",
  description: "Save, read, and organize the links that matter. A clean, minimal read-it-later app.",
  openGraph: {
    title: "Spara - Your personal link library",
    description: "Save, read, and organize the links that matter.",
    url: "https://usespara.com",
    siteName: "Spara",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Spara - Your personal link library",
    description: "Save, read, and organize the links that matter.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
              {/* Nav */}
              <nav className="flex items-center justify-between mb-16 sm:mb-24">
                <a href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors">
                  <img src="/logo.svg" alt="Spara logo" width={24} height={24} className="dark:invert" />
                  Spara
                </a>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <a
                    href="https://app.usespara.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 transition-colors"
                  >
                    Sign in
                  </a>
                </div>
              </nav>

              {children}

              {/* Footer */}
              <footer className="border-t border-border pt-8 flex items-center justify-between text-xs text-muted-foreground">
                <p>
                  © {year} · Built by{" "}
                  <a
                    href="https://samlafontaine.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors"
                  >
                    Sam
                  </a>
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="https://app.usespara.com"
                    className="hover:text-foreground transition-colors"
                  >
                    Go to app &rarr;
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
