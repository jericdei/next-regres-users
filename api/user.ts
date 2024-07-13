import { UserApiParams, UserApiResponse } from "@/lib/types";

export async function getUsers(
  params: UserApiParams = { page: 1 }
): Promise<UserApiResponse> {
  const urlParams = new URLSearchParams(params);
  const url = `${process.env
    .NEXT_PUBLIC_REGRES_API_BASE_URL!}/users?${urlParams.toString()}`;

  const response = await fetch(url);

  return await response.json();
}
