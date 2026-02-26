import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
