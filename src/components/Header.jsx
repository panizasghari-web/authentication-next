"use client";

import { LogoutAuth } from "@/actions/LogoutAction";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function Header() {
  const { user, logoutContext } = useContext(AuthContext);
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" href="/">
            Authentication
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 gap-lg-2">
              <li className="nav-item">
                <Link
                  className={`nav-link${pathname === "/" ? " active" : ""}`}
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                  {pathname === "/" && (
                    <span className="visually-hidden">(current)</span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${pathname.startsWith("/posts") ? " active" : ""}`}
                  href="/posts"
                  aria-current={
                    pathname.startsWith("/posts") ? "page" : undefined
                  }
                >
                  Posts
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center my-2 my-lg-0">
              {user ? (
                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 fw-semibold text-dark">{user.name}</p>
                  <button
                    disabled={loggingOut}
                    onClick={async () => {
                      setLoggingOut(true);
                      try {
                        const result = await LogoutAuth();
                        if (result?.error) {
                          toast.error(result.error);
                          return;
                        }

                        toast.success(result.success);
                        logoutContext();
                        router.replace("/");
                        router.refresh();
                      } finally {
                        setLoggingOut(false);
                      }
                    }}
                    className="btn btn-sm btn-primary rounded-pill px-3 d-flex align-items-center justify-content-center"
                  >
                    {loggingOut ? "Logging out..." : "Logout"}
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="btn btn-sm btn-outline-primary rounded-pill px-3 me-2"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="btn btn-sm btn-primary rounded-pill px-3"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
