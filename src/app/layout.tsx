import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./styles/globals.css";

const lato = Lato({subsets:['latin'], weight:['100','300','400','700','900']})

export const metadata: Metadata = {
  title: "NotSlack",
  description: "Slack by scaptera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
