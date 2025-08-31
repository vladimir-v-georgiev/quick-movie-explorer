// app/(tabs)/favourites.tsx
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import { getFavourites, removeFavourite, clearFavourites } from "../../utils/storage";

export default function Favourites() {
    const [favourites, setFavourites] = useState<any[]>([]);

    const loadFavourites = async () => {
        const data = await getFavourites();
        setFavourites(data);
    };

    const handleRemove = async (id: string) => {
        const updated = await removeFavourite(id);
        setFavourites(updated);
    };

    const handleClearAll = async () => {
        await clearFavourites();
        setFavourites([]);
    };

    useEffect(() => {
        const interval = setInterval(loadFavourites, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <MovieList
            title="Favourites"
            movies={favourites}
            onRemove={handleRemove}
            onClearAll={handleClearAll}
        />
    );
}
