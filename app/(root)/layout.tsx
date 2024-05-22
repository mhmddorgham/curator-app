"use client";
// import { Sidebar, TopHeader } from "@/components/shared";
// import { TopNav } from "@/components/shared/top-nav";

import MobileNav from "@/components/shared/MobileNav";
import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:flex-row justify-start gap-3">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block  min-h-full h-full sticky top-0 left-0  ">
        <NavBar />
      </div>
      <div className="hidden md:block  min-h-full h-full sticky top-0 left-0  ">
        <SideBar />
      </div>
      <main className="flex-1 overflow-x-hidden border-[2px] border-gray-100 rounded-lg p-3 ">
        {children}
      </main>
    </section>
  );
}
