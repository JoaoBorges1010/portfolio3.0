import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/contexts/ContextProvider";
import ThemeSettings from "@/components/ThemeSettings";
import PageWrapper from "@/components/PageWrapper";
import ThemeRoot from "@/components/ThemeRoot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ContextProvider>
          <ThemeRoot className="min-h-screen">
            <PageWrapper>
              <Navbar />
              <ThemeSettings />
              {children}
              <Footer />
            </PageWrapper>
          </ThemeRoot>
        </ContextProvider>
      </body>
    </html>
  );
}
