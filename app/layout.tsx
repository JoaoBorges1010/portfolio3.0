import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/contexts/ContextProvider";
import ThemeSettings from "@/components/ThemeSettings";

export const metadata = {
  title: "João's Website",
  description: "Where you can find interesting things about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Navbar />
          <ThemeSettings />
          <main>{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
