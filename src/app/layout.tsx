import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import EmotionProvider from "@/components/Providers/emotion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  style: 'normal'
});

export const metadata: Metadata = {
  title: "Plyr.me",
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
