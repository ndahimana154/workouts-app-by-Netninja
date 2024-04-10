import { useEffect, useState } from "react";

// Components
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could't fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div> {error}</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          // handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Mario")}
          title="Marios Blogs"
        />
      )}
    </div>
  );
}
