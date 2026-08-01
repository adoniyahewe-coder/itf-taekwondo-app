import "./globals.css";

export const metadata = {
  title: "ITF Taekwondo Ethiopia - Premium Training",
  description: "The world's best ITF Taekwondo learning platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}