import { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="
        w-[185px] h-[200px]
        p-3 rounded-lg shadow-sm
        flex flex-col justify-between text-center
        bg-white
        transition-all duration-300
        hover:scale-[1.03] hover:border hover:border-black
        hover:bg-[rgba(184,48,22,0.08)]
        overflow-hidden
      "
    >
      <div>
        <h2 className="text-[13px] font-semibold mb-1 leading-tight line-clamp-2">
          {title}
        </h2>

        <p className="text-[11px] text-gray-600 line-clamp-3">
          {body}
        </p>
      </div>

      <button
        onClick={() => setClicked(!clicked)}
        className={`
          mt-2 w-full py-1.5 rounded-md text-[11px] font-medium transition
          ${
            clicked
              ? "bg-[var(--color-special-red2)] text-white"
              : "bg-gray-500 text-white hover:bg-gray-400"
          }
        `}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;