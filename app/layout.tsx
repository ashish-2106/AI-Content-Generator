import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"], // Specify the subset(s)
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you need
  variable: "--font-outfit", // Define a custom CSS variable for the font
});

export const metadata: Metadata = {
  title: "AI-Content-Generator",
  description: "AI for Content Gemeration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.variable} ${outfit.variable} antialiased`} >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
