import PostCard from "./PostCard";
import posts from "./postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-center mb-8 text-red-500">
        Post Cards
      </h1>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>

    </div>
  );
}

export default Exercise;