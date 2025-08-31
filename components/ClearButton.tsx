// components/ClearButton.tsx
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ClearButtonProps = { onPress: () => void };

export default function ClearButton({ onPress }: ClearButtonProps) {
    return (
        <TouchableOpacity style={styles.clearButton} onPress={onPress}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Clear All</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    clearButton: {
        backgroundColor: "black",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
});
