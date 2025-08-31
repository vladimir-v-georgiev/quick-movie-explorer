import { useState } from "react";

const API_KEY = "b2b947c9"; // Get from http://www.omdbapi.com/

export default function useMovies() {
    const [movies, setMovies] = useState<any[]>([]);

    const searchMovies = async (query: string) => {
        if (!query.trim()) return;
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await res.json();
        setMovies(data.Search || []);
    };

    const clearMovies = () => setMovies([]);

    return { movies, searchMovies, clearMovies };
}

