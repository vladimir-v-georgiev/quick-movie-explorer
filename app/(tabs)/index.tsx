import { useState } from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import useMovies from "../../hooks/useMovies";

export default function Home() {
    const [query, setQuery] = useState("");
    const { movies, searchMovies, clearMovies } = useMovies();

    const placeholder = require("../../assets/placeholder.png");

    const handleClear = () => {
        setQuery("");
        clearMovies();
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.searchRow}>
                <TextInput
                    placeholder="Search films..."
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={() => searchMovies(query)}
                    style={styles.input}
                />
                {query.length > 0 && (
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <Text style={{ fontWeight: "bold" }}>✕</Text>
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                data={movies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({ item }) => (
                    <MovieListItem item={item} placeholder={placeholder} />
                )}
            />
        </View>
    );
}

type MovieItemProps = {
    item: {
        imdbID: string;
        Poster: string;
        Title: string;
    };
    placeholder: any;
};

function MovieListItem({ item, placeholder }: MovieItemProps) {
    const initialSource = item.Poster && item.Poster !== "N/A"
        ? { uri: item.Poster }
        : placeholder;

    const [source, setSource] = useState(
        initialSource
    );

    return (
        <Link href={{ pathname: "/details", params: { id: item.imdbID } }} asChild>
            <TouchableOpacity style={{ flexDirection: "row", marginBottom: 12 }}>
                <Image
                    source={source}
                    style={{ width: 60, height: 90, marginRight: 12, borderRadius: 8 }}
                    onError={() => setSource(placeholder)}
                />
                <Text style={{ fontSize: 16, alignSelf: "center" }}>{item.Title}</Text>
            </TouchableOpacity>
        </Link>
    );

}
const styles = StyleSheet.create({
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
    },
    clearButton: {
        marginLeft: 8,
        padding: 8,
        backgroundColor: "#eee",
        borderRadius: 8,
    },
});
