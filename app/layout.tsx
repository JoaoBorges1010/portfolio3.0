import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/contexts/ContextProvider";
import ThemeSettings from "@/components/ThemeSettings";
import PageWraper from "@/components/PageWraper";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <PageWraper>
            <Navbar />
            <ThemeSettings />
            {children}
            <Footer />
          </PageWraper>
        </ContextProvider>
      </body>
    </html>
  );
}
