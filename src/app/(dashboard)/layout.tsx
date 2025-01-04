import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard School-management",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-full overflow-auto">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="school logo" width={30} height={30} />
          <span className="hidden lg:block">DB Dashboard</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT</div>; */}
      <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-zinc-100 overflow-auto flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
