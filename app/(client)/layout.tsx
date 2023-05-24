import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="client-layout">
      <div className="container text-right py-3">
        <Button asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild className="ml-1">
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
