import "./globals.css";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${merriweather.variable}`}
    >
      <body
        className="
          min-h-screen
          bg-[rgb(var(--background))]
          text-[rgb(var(--foreground))]
          transition-colors duration-300
        "
      >
        {children}
      </body>
    </html>
  );
}