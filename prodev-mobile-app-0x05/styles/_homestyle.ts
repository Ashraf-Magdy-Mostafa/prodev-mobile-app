// styles/_homestyle.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    // ────────────── Search Section ──────────────
    searchGroup: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "white",
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#F0F0F0",
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 14,
        color: "#555",
    },
    searchControl: {
        paddingVertical: 4,
        fontSize: 14,
        color: "#333",
    },
    searchButton: {
        backgroundColor: "#34967C",
        borderRadius: 24,
        padding: 8,
        marginLeft: 8,
    },

    // ────────────── Filter Section ──────────────
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 12,
    },
    filterContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },

    // ────────────── Listings Section ──────────────
    listingContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 10,
    },

    // ────────────── Pagination / Show More ──────────────
    paginationContainer: {
        alignItems: "center",
        marginVertical: 16,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
    },
    showMoreButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
    },
});

export { styles };

