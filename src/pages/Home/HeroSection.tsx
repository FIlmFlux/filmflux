import { useEffect, useState } from "react";
import { MovieCard } from "@/components/ui/MovieCard";

type Movie = {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
};

// API config
const TMDB_API = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function HeroSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch popular movies on initial render
    async function loadPopularMovies() {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/popular?api_key=${TMDB_API}`,
        );

        const data = await res.json();
        // await new Promise(resolve => setTimeout(resolve, 800));

        // Map only required fields to keep UI decoupled from API structure
        setMovies(
          data.results.slice(0, 14).map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path
              ? `${IMAGE_BASE}${movie.poster_path}`
              : "",
            releaseDate: movie.release_date,
          })),
        );
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        // Ensures loading state clears even if request fails
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  return (
    <div className="bg-linear-to-b from-green-800 to-black py-8">
      {/* Hero Header */}
      <div className="px-12 mb-6">
        <h1 className="text-4xl font-bold text-white">
          Popular<span className="text-green-400 shadow-2xl">Movies</span>
        </h1>
      </div>

      {/* Grid container for loading state & movie results */}
      <div className="px-12">
        {/* Skeleton placeholders to prevent layout shift while loading */}
        {loading ? (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                style={{ opacity: i % 2 ? 0.7 : 0.9 }}
                className="w-full aspect-2/3 bg-neutral-800 animate-pulse rounded-lg opacity-80"
              />
            ))}
          </div>
        ) : (
          /* Render movie cards once data is available */
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.poster}
                date={movie.releaseDate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
