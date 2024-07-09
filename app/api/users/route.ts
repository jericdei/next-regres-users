import { UserApiResponse } from "@/lib/types";
import { NextResponse } from "next/server";

const baseUrl = process.env.REGRES_API_BASE_URL;

/**
 * Get complete API URL object together with specified path and query parameters.
 */
function getCompleteUrl(path: string = "", params?: URLSearchParams) {
  const url = new URL(`${baseUrl}/${path}`);

  if (params && params.size > 0) {
    url.search = params.toString();
  }

  return url;
}

export async function GET(
  request: Request
): Promise<NextResponse<UserApiResponse> | Response> {
  if (!baseUrl) {
    return Response.json(
      {
        message: "REGRES_API_BASE_URL is not defined!",
      },
      {
        status: 500,
      }
    );
  }

  const { searchParams } = new URL(request.url);

  const url = getCompleteUrl("users", searchParams);

  const result = await fetch(url);

  if (!result.ok) {
    throw new Error("Failed to fetch users from API!");
  }

  const data = await result.json();

  return Response.json(data as Promise<UserApiResponse>);
}
