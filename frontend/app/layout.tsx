import "./globals.css";

export const metadata = {
  title: "Ana Zderic | Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}
