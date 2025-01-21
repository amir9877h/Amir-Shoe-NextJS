import { Footer } from "@/components/Front/Footer";
import { Navbar } from "@/components/Front/Navbar";
import { type ReactNode } from "react";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
