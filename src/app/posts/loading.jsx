export default function Loading() {
  return (
    <main className="container-fluid min-vh-100 bg-primary-subtle bg-gradient py-5">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="mb-4">
              <h1 className="display-6 fw-bold text-primary mb-2">Posts</h1>
              <p className="text-secondary mb-0">
                Catch up on the latest posts.
              </p>
            </div>
            <div
              className="card border-0 shadow-sm rounded-4"
              role="status"
              aria-live="polite"
            >
              <div className="card-body p-5 text-center">
                <span
                  className="spinner-border text-primary mb-3"
                  aria-hidden="true"
                />
                <p className="text-secondary mb-0">Loading posts...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}