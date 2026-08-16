import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "BrainBloom",
  description: "An idea expansion agent",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
        <body className={cn(inter.className, 'antialiased')}>{children}</body>
        <Toaster />
    </html>
  );
}
