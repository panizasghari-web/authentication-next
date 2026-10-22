"use server";

import { cookies } from "next/headers";
import {
  getApiErrorMessage,
  getRequestErrorMessage,
  readApiResponse,
} from "@/lib/apiResponse";

async function LoginAuth(state, formData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email) {
    return {
      error: "Email is required!",
      errorEmail: "Email is required!",
    };
  }

  if (!password) {
    return {
      error: "Password is required!",
      errorPassword: "Password is required",
    };
  }

  let res;
  let data;
  try {
    res = await fetch("http://127.0.0.1:8000/api/login", {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    data = await readApiResponse(res);
  } catch (error) {
    return { error: getRequestErrorMessage(error) };
  }

  if (!res.ok) {
    return { error: getApiErrorMessage(data, res.status) };
  }

  if (typeof data?.token !== "string" || !data.token || !data.user) {
    return {
      error: "The authentication service returned an invalid login response.",
    };
  }

  (await cookies()).set({
      name: "token",
      value: data.token,
      httpOnly: true,
      path: "/",
    });

  return {
    success: "You are logged in!",
    user: data.user,
  };
}
export { LoginAuth };
