import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Image, Text, Alert, ActivityIndicator } from "react-native";
import ToggleListButton from "../components/ToggleListButton";
import {
    saveFavourite, getFavourites, removeFavourite,
    saveWatchLater, getWatchLater, removeWatchLater
} from "../utils/storage";

const API_KEY = "b2b947c9";
const placeholder = require("../assets/placeholder.png");

export default function Details() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    const [imageError, setImageError] = useState(false); // track image load error

    useEffect(() => {
        const load = async () => {
            if (!id) return;
            setLoading(true);
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            const data = await res.json();
            setMovie(data);

            const favs = await getFavourites();
            setIsFavourite(favs.some((m: any) => m.imdbID === data.imdbID));

            const wl = await getWatchLater();
            setIsWatchLater(wl.some((m: any) => m.imdbID === data.imdbID));

            setLoading(false);
        };
        load();
    }, [id]);

    if (loading) return <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />;
    if (!movie || movie.Response === "False") return <Text style={{ padding: 16 }}>Sorry, we could not find details for this title.</Text>;

    // Choose source: poster if valid and no error, otherwise placeholder
    const imageSource =
        !imageError && movie.Poster && movie.Poster !== "N/A" && movie.Poster.startsWith("http")
            ? { uri: movie.Poster }
            : placeholder;

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Image
                source={imageSource}
                style={{ width: "100%", height: 400, borderRadius: 12 }}
                onError={() => setImageError(true)} // fallback to placeholder
            />

            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 16 }}>{movie.Title}</Text>
            <Text style={{ marginVertical: 8 }}>{movie.Plot !== "N/A" ? movie.Plot : "No plot available."}</Text>

            <ToggleListButton
                isActive={isFavourite}
                addLabel="Add to Favourites"
                removeLabel="Remove from Favourites"
                onAdd={async () => {
                    await saveFavourite(movie);
                    setIsFavourite(true);
                    Alert.alert("Added", `${movie.Title} added to Favourites!`);
                }}
                onRemove={async () => {
                    await removeFavourite(movie.imdbID);
                    setIsFavourite(false);
                    Alert.alert("Removed", `${movie.Title} removed from Favourites!`);
                }}
            />

            <ToggleListButton
                isActive={isWatchLater}
                addLabel="Add to Watch Later"
                removeLabel="Remove from Watch Later"
                onAdd={async () => {
                    await saveWatchLater(movie);
                    setIsWatchLater(true);
                    Alert.alert("Added", `${movie.Title} added to Watch Later!`);
                }}
                onRemove={async () => {
                    await removeWatchLater(movie.imdbID);
                    setIsWatchLater(false);
                    Alert.alert("Removed", `${movie.Title} removed from Watch Later!`);
                }}
            />
        </ScrollView>
    );
}
