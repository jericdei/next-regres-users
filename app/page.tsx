import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen grid place-items-center">
      <Link href="/users">
        <Button>Go to the users page</Button>
      </Link>
    </main>
  );
}
