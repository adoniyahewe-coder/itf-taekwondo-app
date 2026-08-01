import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ITF Taekwondo Ethiopia",
  description: "Professional ITF Training App",
  appleWebApp: { title: "ITF Ethiopia", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents zooming, making it feel like a real App
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black overflow-hidden">{children}</body>
    </html>
  );
}