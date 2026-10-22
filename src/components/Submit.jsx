"use client";

import { useFormStatus } from "react-dom";

export default function Submit({ title }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary w-100 py-2"
    >
      {title}
      {pending && <div className="spinner-border spinner-border-sm ms-2"></div>}
    </button>
  );
}
