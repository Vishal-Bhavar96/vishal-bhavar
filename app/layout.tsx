import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishal — Building Beyond Possible",
  description:
    "I build useful products, experiment with emerging technology, and turn the process into stories worth sharing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
