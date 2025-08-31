import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";

type MovieCardProps = {
    title: string;
    poster?: string;
};

export default function MovieCard({ title, poster }: MovieCardProps) {
    // Local placeholder image
    const placeholder = require("../assets/placeholder.png"); // Add this image to assets/

    const [imageSource, setImageSource] = useState(
        poster && poster !== "N/A" ? { uri: poster } : placeholder
    );

    return (
        <View style={styles.card}>
            <Image
                source={imageSource}
                style={styles.poster}
                resizeMode="cover"
                onError={() => setImageSource(placeholder)} // Fallback on broken URLs
            />
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 220,
        margin: 8,
        alignItems: "center",
    },
    poster: {
        width: 120,
        height: 180,
        borderRadius: 8,
        backgroundColor: "#ccc", // backup background colour
    },
    title: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
});
