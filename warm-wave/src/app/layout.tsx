import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import { Typography, Box, Stack } from "@mui/material";
import Footer from "@/components/layout/footer";

import NavBar from "@/components/layout/navbar";
import MobileLayout from "@/components/layout/mobileLayout";
import MobileFooter from "@/components/layout/mobileFooter";
import CopyRight from "@/components/layout/copyright";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Warm Wave Studio",
  description: "Mixing and Mastering Studio in Los Angeles, CA",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="main">
        <ThemeRegistry>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <NavBar />
          </Box>
          <main>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <MobileLayout>{children}</MobileLayout>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              {children}
            </Box>
          </main>
          <MobileFooter />
          <Footer />
          <CopyRight />
          <SpeedInsights />
          <Analytics />
        </ThemeRegistry>
      </body>
    </html>
  );
}
