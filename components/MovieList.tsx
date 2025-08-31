// components/MovieList.tsx
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import MovieCard from "./MovieCard";
import ClearButton from "./ClearButton";

type Movie = {
    imdbID: string;
    Title: string;
    Poster: string;
};

type MovieListProps = {
    title: string;
    movies: Movie[];
    onRemove: (id: string) => void;
    onClearAll: () => void;
};

export default function MovieList({
    title,
    movies,
    onRemove,
    onClearAll,
}: MovieListProps) {
    const router = useRouter();
    const screenWidth = Dimensions.get("window").width;
    const cardWidth = (screenWidth - 48) / 3; // padding for two columns

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={styles.header}>{title}</Text>

            <FlatList
                data={movies}
                numColumns={3} // 🔥 Two columns
                keyExtractor={(item) => item.imdbID}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { width: cardWidth }]}>
                        {/* Navigate to details */}
                        <TouchableOpacity
                            onPress={() =>
                                router.push({ pathname: "/details", params: { id: item.imdbID } })
                            }
                        >
                            <MovieCard title={item.Title} poster={item.Poster} />
                        </TouchableOpacity>

                        {/* Remove button */}
                        <TouchableOpacity
                            style={styles.removeButtonFull}
                            onPress={() => onRemove(item.imdbID)}
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text>No items yet.</Text>}
            />

            {movies.length > 0 && <ClearButton onPress={onClearAll} />}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    cardContainer: {
        marginBottom: 20,
        marginHorizontal: 4,
        alignItems: "center",
    },
    removeButtonFull: {
        marginTop: 8,
        backgroundColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: "center",
    },
});
