"use server";

import { cookies } from "next/headers";

async function MeAuth() {
  const token = (await cookies()).get("token");

  if (!token) {
    return {
      error: "Not Authorized!",
    };
  }

  const res = await fetch("http://127.0.0.1:8000/api/me", {
    cache: "no-store",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
      Accept: "application/json",
    },
  });

  const data = await res.json();

  if (res.ok) {
    return {
      user: data.user,
    };
  } else {
    return {
      error: "User Forbidden!",
    };
  }
}
export { MeAuth };
