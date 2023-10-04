import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/ui/header";
import JotaiProvider from "@/components/providers/jotai-provider";
import ReactQueryProvider from "@/components/providers/react-query-provider";

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
