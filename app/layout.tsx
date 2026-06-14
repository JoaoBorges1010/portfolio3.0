import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/contexts/ContextProvider";
import ThemeSettingsSafe from "@/components/ThemeSettingsSafe";
import PageWrapper from "@/components/PageWrapper";
import ThemeRoot from "@/components/ThemeRoot";
import ThemeInitScript from "@/components/ThemeInitScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <ContextProvider>
          <ThemeRoot className="min-h-screen">
            <Navbar />
            <ThemeSettingsSafe />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </ThemeRoot>
        </ContextProvider>
      </body>
    </html>
  );
}
