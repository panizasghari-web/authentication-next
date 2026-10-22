"use client";

import Submit from "@/components/Submit";
import { LoginAuth } from "@/actions/LoginAction";
import { useActionState, useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const [state, formAction] = useActionState(LoginAuth, {});

  const { loginContext } = useContext(AuthContext);
  const loginSubmitted = useRef(false);

  useEffect(() => {
    if (!loginSubmitted.current) {
      return;
    }

    loginSubmitted.current = false;

    if (state?.success) {
      loginContext(state?.user);
      toast.success(state.success);
      router.replace("/posts");
    } else if (state?.error) {
      toast.error(state?.error);
    }
  }, [loginContext, router, state]);

  return (
    <main className="container-fluid position-relative d-flex align-items-center justify-content-center w-100 min-vh-100 overflow-hidden py-4">
      <img
        src="/images2.jpg"
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
                <h1 className="h2 fw-bold mb-2">Login to your account</h1>
                <p className="text-secondary mb-0">Login to get started.</p>
              </div>

              {/* ############ Form ########## */}

              <form
                action={formAction}
                onSubmit={() => {
                  loginSubmitted.current = true;
                }}
              >
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

                <Submit title="Login" />
              </form>
              {/* ############ Form ########## */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
