"use server";

import {
  getApiErrorMessage,
  getRequestErrorMessage,
  readApiResponse,
} from "@/lib/apiResponse";

async function registerAuth(state, formData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!name) {
    return {
      error: "Name is required!",
      errorName: "Name is required!",
    };
  }

  if (!/^[a-z0-9_-]{3,15}$/i.test(name)) {
    return {
      error: "Valid name is required!",
      errorName: "Valid name is required!",
    };
  }

  if (!email) {
    return {
      error: "Email is required!",
      errorEmail: "Email is required!",
    };
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return {
      error: "Valid email is required!",
      errorEmail: "Valid email is required!",
    };
  }

  if (!password) {
    return {
      error: "Password is required!",
      errorPassword: "Password is required!",
    };
  }

  if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password,
    )
  ) {
    return {
      error:
        "Password must be at least 8 characters and include uppercase and lowercase letters, a number, and a special character or space.",
      errorPassword:
        "At least 8 characters with an uppercase letter, a lowercase letter, a number, and a special character or space are required.",
    };
  }

  if (!confirmPassword) {
    return {
      error: "Confirm password is required!",
      errorConfirmPassword: "Confirm password is required!",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match!",
      errorMatch: "Passwords do not match!",
    };
  }

  let res;
  let data;
  try {
    res = await fetch("http://127.0.0.1:8000/api/register", {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        c_password: confirmPassword,
      }),
    });
    data = await readApiResponse(res);
  } catch (error) {
    return { error: getRequestErrorMessage(error) };
  }

  if (!res.ok) {
    return { error: getApiErrorMessage(data, res.status) };
  }

  return {
    success: "You are registered!",
  };
}
export { registerAuth };
