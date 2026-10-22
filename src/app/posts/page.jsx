const getPosts = async () => {
  const res = await fetch("http://localhost:8000/api/posts", {
    method: "GET",
    cache: "no-store",
  });

  if (res.ok) {
    const data = await res.json();
    return data.posts;
  } else {
    throw new Error(res.status);
  }
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main className="container-fluid min-vh-100 bg-primary-subtle bg-gradient py-5">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="mb-4">
              <h1 className="display-6 fw-bold text-primary mb-2">Posts</h1>
              <p className="text-secondary mb-0">Catch up on the latest posts.</p>
            </div>
            <div className="row g-4">
              {posts.map((post) => (
                <div key={post.id} className="col-12">
                  <article className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4 p-md-5">
                      <h2 className="h4 fw-bold text-primary card-title mb-3">
                        {post.title}
                      </h2>
                      <p className="card-text text-secondary lh-lg mb-0">
                        {post.body}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
