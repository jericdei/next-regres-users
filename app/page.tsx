import UsersList from "@/components/users-list";
import { UserApiResponse } from "@/lib/types";

export default async function Home() {
  const response = await fetch(process.env.BASE_URL + "/api/users");
  const users = (await response.json()) as UserApiResponse;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-8">
      <h1 className="font-bold text-3xl">Users</h1>

      <UsersList users={users} />
    </main>
  );
}
