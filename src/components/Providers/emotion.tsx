"use client";
import { useGluedEmotionCache } from "@/lib/emotionNextjsGlue";
import { CacheProvider } from "@emotion/react";
import { MantineProvider } from "@mantine/core";

export default function EmotionProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const cache = useGluedEmotionCache();
  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{
          globalStyles: () => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
            },
          }),
          colors: {
            button: ["#ff6600", "#ffffff"],
            text: ["#5c5b5b", "#000000", "#666666"],
            background: ["#ffffff"],
          },
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
