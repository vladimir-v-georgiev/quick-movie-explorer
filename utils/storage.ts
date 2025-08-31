import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVOURITES_KEY = "favourites";

export async function saveFavourite(movie: any) {
    try {
        const existing = await AsyncStorage.getItem(FAVOURITES_KEY);
        const favourites = existing ? JSON.parse(existing) : [];
        if (!favourites.some((fav: any) => fav.imdbID === movie.imdbID)) {
            const updated = [...favourites, movie];
            await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
        }
    } catch (e) {
        console.error(e);
    }
}

export async function getFavourites() {
    try {
        const data = await AsyncStorage.getItem(FAVOURITES_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function removeFavourite(id: string) {
    try {
        const data = await AsyncStorage.getItem(FAVOURITES_KEY);
        const favourites = data ? JSON.parse(data) : [];
        const updated = favourites.filter((fav: any) => fav.imdbID !== id);
        await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function clearFavourites() {
    try {
        await AsyncStorage.removeItem(FAVOURITES_KEY);
    } catch (e) {
        console.error(e);
    }
}

const WATCH_LATER_KEY = "watchLater";

export async function saveWatchLater(movie: any) {
    try {
        const existing = await AsyncStorage.getItem(WATCH_LATER_KEY);
        const watchLater = existing ? JSON.parse(existing) : [];
        if (!watchLater.some((m: any) => m.imdbID === movie.imdbID)) {
            const updated = [...watchLater, movie];
            await AsyncStorage.setItem(WATCH_LATER_KEY, JSON.stringify(updated));
        }
    } catch (e) {
        console.error(e);
    }
}

export async function getWatchLater() {
    try {
        const data = await AsyncStorage.getItem(WATCH_LATER_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function removeWatchLater(id: string) {
    try {
        const data = await AsyncStorage.getItem(WATCH_LATER_KEY);
        const watchLater = data ? JSON.parse(data) : [];
        const updated = watchLater.filter((m: any) => m.imdbID !== id);
        await AsyncStorage.setItem(WATCH_LATER_KEY, JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function clearWatchLater() {
    try {
        await AsyncStorage.setItem(WATCH_LATER_KEY, JSON.stringify([]));
    } catch (e) {
        console.error(e);
    }
}
