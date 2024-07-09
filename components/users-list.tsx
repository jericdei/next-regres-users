"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { User, UserApiResponse } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

type UsersListProps = {
  users: UserApiResponse;
};

export default function UsersList({ users }: UsersListProps) {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(users.page);
  const [userList, setUserList] = useState(users.data);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const getFullName = (user: User) => `${user.first_name} ${user.last_name}`;

  async function handleLoadMore() {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REGRES_API_BASE_URL}/users?page=${
        currentPage + 1
      }`
    );

    const { data, page, total_pages } =
      (await response.json()) as UserApiResponse;

    if (data.length === 0 || page === total_pages) {
      toast({
        title: "No more data!",
        description: "This is the last page.",
      });

      setButtonDisabled(true);
    }

    setUserList((oldValue) => [...oldValue, ...data]);
    setCurrentPage(page);
    setLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userList.map((user) => (
          <Card key={user.id}>
            <CardHeader className="items-center gap-y-2">
              <Image
                className="rounded-full w-auto h-auto"
                src={user.avatar}
                alt={getFullName(user)}
                width={64}
                height={64}
                priority
              />

              <p>#{user.id}</p>
            </CardHeader>

            <CardContent className="text-center space-y-2">
              <p>{user.email}</p>

              <p className="font-bold">{getFullName(user)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button disabled={loading || buttonDisabled} onClick={handleLoadMore}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <span>Load More</span>
        )}
      </Button>
    </>
  );
}
