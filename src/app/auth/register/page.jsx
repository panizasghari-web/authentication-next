"use client";

import { registerAuth } from "@/actions/RegisterAction";
import Submit from "@/components/Submit";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [state, formAction] = useActionState(registerAuth, {});
  const registrationSubmitted = useRef(false);

  useEffect(() => {
    if (!registrationSubmitted.current) {
      return;
    }

    registrationSubmitted.current = false;

    if (state?.success) {
      toast.success(state.success);
      router.replace("/auth/login");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [router, state]);

  return (
    <main className="container-fluid position-relative d-flex align-items-center justify-content-center w-100 min-vh-100 overflow-hidden py-4">
      <img
        src="/images1.jpg"
        alt=""
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-container"
      />
      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark opacity-25" />
      <div className="row position-relative z-1 justify-content-center w-100">
        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
          <div
            className="card bg-white bg-opacity-50 border border-white border-opacity-50 shadow-lg rounded-4"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="card-body p-4 p-sm-5">
              <div className="text-center mb-4">
                <h1 className="h2 fw-bold mb-2">Create your account</h1>
                <p className="text-secondary mb-0">Register to get started.</p>
              </div>

              {/* ############ Form ########## */}

              <form
                action={formAction}
                onSubmit={() => {
                  registrationSubmitted.current = true;
                }}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <p className="text-danger small mt-1 mb-0">
                    {state?.errorName}
                  </p>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                  <p className="text-danger small mt-1 mb-0">
                    {state?.errorEmail}
                  </p>
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    name="password"
                  />
                  <p className="text-danger small mt-1 mb-0">
                    {state?.errorPassword}
                  </p>
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPass" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPass"
                    name="confirmPassword"
                  />
                  <p className="text-danger small mt-1 mb-0">
                    {state?.errorConfirmPassword}
                  </p>
                  <p className="text-danger small mt-1 mb-0">
                    {state?.errorMatch}
                  </p>
                </div>
                <Submit title="Register" />
              </form>
              {/* ############ Form ########## */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
