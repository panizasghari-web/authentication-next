"use client";

export default function Error({ error, reset }) {
  return (
    <main className="container-fluid min-vh-100 bg-primary-subtle bg-gradient py-5 d-flex align-items-center">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 text-center">
              <div className="card-body p-4 p-md-5">
                <div
                  className="rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "3.5rem", height: "3.5rem" }}
                  aria-hidden="true"
                >
                  !
                </div>
                <h1 className="h3 fw-bold text-primary mb-2">
                  Couldn&apos;t load the posts
                </h1>
                <p className="text-secondary mb-4">
                  Please try again. If the problem continues, come back later.
                </p>
                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => reset()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
