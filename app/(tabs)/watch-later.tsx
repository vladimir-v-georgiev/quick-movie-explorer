// app/(tabs)/watch-later.tsx
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import { getWatchLater, removeWatchLater, clearWatchLater } from "../../utils/storage";

export default function WatchLater() {
    const [watchLater, setWatchLater] = useState<any[]>([]);

    const loadWatchLater = async () => {
        const data = await getWatchLater();
        setWatchLater(data);
    };

    const handleRemove = async (id: string) => {
        const updated = await removeWatchLater(id);
        setWatchLater(updated);
    };

    const handleClearAll = async () => {
        await clearWatchLater();
        setWatchLater([]);
    };

    useEffect(() => {
        const interval = setInterval(loadWatchLater, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <MovieList
            title="Watch Later"
            movies={watchLater}
            onRemove={handleRemove}
            onClearAll={handleClearAll}
        />
    );
}
