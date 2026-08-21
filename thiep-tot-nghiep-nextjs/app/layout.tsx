import type { Metadata } from "next";
import { Baloo_2, Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lễ Tốt Nghiệp Vũ Hà Nam",
  description:
    "Thiệp mời lễ tốt nghiệp phong cách vui tươi đen-vàng-kem, có đếm ngược, thư mời, dòng thời gian kỷ niệm và bản đồ chỉ đường.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="font-body overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
