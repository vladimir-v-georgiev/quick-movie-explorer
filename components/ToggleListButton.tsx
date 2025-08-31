// components/ToggleListButton.tsx
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ToggleListButtonProps = {
    isActive: boolean;                // e.g. already in favourites?
    addLabel: string;                 // "Add to favourites"
    removeLabel: string;              // "Remove from favourites"
    onAdd: () => Promise<void> | void;
    onRemove: () => Promise<void> | void;
    disabled?: boolean;
};

export default function ToggleListButton({
    isActive,
    addLabel,
    removeLabel,
    onAdd,
    onRemove,
    disabled,
}: ToggleListButtonProps) {
    const handlePress = async () => {
        if (isActive) await onRemove();
        else await onAdd();
    };

    return (
        <TouchableOpacity
            style={[styles.button, isActive && styles.remove, disabled && styles.disabled]}
            onPress={handlePress}
            disabled={disabled}
        >
            <Text style={styles.text}>{isActive ? removeLabel : addLabel}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 8,
    },
    remove: {
        backgroundColor: "#FF3B30",
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});
