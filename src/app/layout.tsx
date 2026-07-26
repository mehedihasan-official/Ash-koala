import AuthProvider from "@/components/AuthProvider";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Koala's Resorts — Timeshare Rental Income",
  description:
    "RentKoala's timeshare resort weeks direct from the owner. Verified, guaranteed, hassle-free.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning here only covers this element's own
          attributes — it does NOT hide mismatches in children. It's
          needed because some browser extensions (Grammarly, ColorZilla,
          etc.) inject their own attributes onto <body> right after page
          load, which otherwise trips React's hydration diff even though
          nothing in the app actually changed. */}
      <body
        className="min-h-full flex flex-col text-ink"
        suppressHydrationWarning
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
