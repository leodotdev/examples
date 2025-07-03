import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./reveal-on-scroll.css";
import { ThemeProvider } from "@/components/theme-provider";
import VisualEditing from "@/components/VisualEditing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: "Digital Magic Platform",
  description: "Turn wild ideas into digital magic. Build products that spark joy and change how people see the world.",
  keywords: "digital platform, development, automation, analytics",
  openGraph: {
    title: "Digital Magic Platform",
    description: "Turn wild ideas into digital magic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <VisualEditing />
        </ThemeProvider>
        <script src="/reveal-on-scroll.js" defer></script>
      </body>
    </html>
  );
}