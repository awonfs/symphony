import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import JotaiProvider from "@/components/providers/jotai-provider";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import type { Metadata } from "next";
import Header from "@/components/ui/header";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Symphony",
  description: "The best music app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <JotaiProvider>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
