"use server";

import { cookies } from "next/headers";
import {
  getApiErrorMessage,
  getRequestErrorMessage,
  readApiResponse,
} from "@/lib/apiResponse";

async function LogoutAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token?.value) {
    return { success: "You are logged out!" };
  }

  let res;
  let data;
  try {
    res = await fetch("http://127.0.0.1:8000/api/logout", {
      cache: "no-store",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: "application/json",
      },
    });
    data = await readApiResponse(res);
  } catch (error) {
    return { error: getRequestErrorMessage(error) };
  }

  if (!res.ok) {
    return { error: getApiErrorMessage(data, res.status) };
  }

  cookieStore.delete("token");
  return {
    success: "You are logged out!",
  };
}

export { LogoutAuth };
