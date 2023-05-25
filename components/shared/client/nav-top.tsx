import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavDropdown from "./nav-dropdown";

export default function Component() {
  return (
    <div className="container py-3 flex justify-between">
      <div>
        <Button asChild className="mr-2" variant="outline">
          <Link href="/">Home</Link>
        </Button>
        <NavDropdown />
      </div>
      <div>
        <Button asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild className="ml-1">
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
