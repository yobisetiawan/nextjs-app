import Link from "next/link";

import { Menu } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-template">
      <div className="sidebar bg-slate-200 w-[250px] fixed left-0 top-0 bottom-0">
        <div className="py-3 bg-slate-100 text-center text-4xl font-extrabold tracking-tight ">
          Logo
        </div>
        <div className="p-3">
          <div className="font-bold mb-3">Navigation</div>
          <ul className="pl-4">
            <li>
              <Link href={"/administrator"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/administrator/user"}>User</Link>
            </li>
            <li>
              <Link href={"/administrator/users"}>Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content ps-[250px]">
        <div className="h-[64px] bg-slate-50 fixed left-[250px] top-0 right-0 flex justify-between">
          <div className="flex justify-center items-center h-[64px] w-[64px]">
            <Menu />
          </div>
          <div className="h-[64px] items-center flex pr-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="pl-3">
                <div className="text-xs">Admin</div>
                <div className="font-bold">Implementer</div>
            </div>
          </div>
        </div>
        <div className="pt-[64px] ">
          <div className="h-[2000px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
