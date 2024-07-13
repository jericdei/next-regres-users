import UsersList from "@/components/users-list";
import { getUsers } from "@/api/user";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center py-12 lg:p-24 gap-y-8">
      <h1 className="font-bold text-3xl">Users</h1>

      <UsersList users={users} />
    </main>
  );
}
