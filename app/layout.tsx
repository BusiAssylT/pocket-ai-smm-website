import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Карманный ИИ-СММщик",
    template: "%s — Карманный ИИ-СММщик",
  },
  description:
    "Персональная ИИ-система для экспертов и небольших проектов: помогает удерживать контекст, готовить контент и снижать объём ручной работы в блоге.",
  openGraph: {
    title: "Карманный ИИ-СММщик",
    description:
      "Блог больше не должен полностью держаться на вас. Соберите персональную систему, которая знает ваш голос, продукт и контентную логику.",
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "ИИ-студия Асыл Турубаевой",
  },
  twitter: {
    card: "summary_large_image",
    title: "Карманный ИИ-СММщик",
    description:
      "Персональная система для блога, а не ещё один генератор случайных текстов.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
