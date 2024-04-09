import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import Providers from "./providers";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "단페스타 2024",
  description: "단국대학교 대동제 2024 공식 홈페이지 입니다.",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={clsx(NotoSansKR.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
