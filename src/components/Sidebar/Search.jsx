import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) return;

    const timer = setTimeout(() => {
      navigate(`/search/${query}`);
    }, 3000); // 3 seconds debounce

    return () => clearTimeout(timer);
  }, [query, navigate]);

  return (
    <form className="max-w-md mx-auto mt-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
        </div>

        <input
          type="search"
          className="block w-full p-3 ps-9 border border-(--border) rounded-md"
          placeholder="Search tasks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
