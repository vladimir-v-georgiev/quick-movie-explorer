# Quick Movie Explorer

A lightweight mobile app built with **React Native + Expo** that lets users quickly search for movies, view details, and save favorites locally.

This project demonstrates **API fetching, navigation, state management, local storage, and polished UI** using TypeScript.

## 🚀 Features

* **Search Movies:** Search for movies using the [OMDb API](http://www.omdbapi.com/).
* **Movie Details:** View poster, title, year, rating, plot, and more.
* **Favorites:** Save favorite movies locally using AsyncStorage.
* **Placeholder Images:** Automatically fall back to a placeholder if a movie poster is missing or broken.

## 🛠 Tech Stack

* **React Native + Expo** – Cross-platform mobile development
* **TypeScript** – Type safety for scalable code
* **React Navigation** – Stack & tab navigation
* **AsyncStorage** – Local storage for favorites and watch later
* **OMDb API** – Public movie database API
* **StyleSheet / NativeWind** – Clean and responsive UI

## 📝 Screens

| Screen            | Features                                                         |
| ----------------- | ---------------------------------------------------------------- |
| **Home / Search** | Search bar, list of movie posters/titles (`FlatList`), API fetch |
| **Details**       | Big poster, title, year, rating, plot, “Add to Favorites” button |
| **Favorites**     | View locally saved movies                                        |

## ⚡ Optional Enhancements

* Splash screen using Expo’s SplashScreen API
* Pull-to-refresh for search results
* Offline support: favorites load without API

## 📁 File Structure (Example)

```
app/
├─ (tabs)/
│  ├─ index.tsx         # Home screen
├─ details.tsx          # Movie details screen
├─ favourites.tsx       # Favorites screen
assets/
├─ placeholder.png      # Default poster image
components/
├─ MovieListItem.tsx    # Reusable list item component
├─ ToggleListButton.tsx # Button for favourites/watch later
hooks/
├─ useMovies.ts         # Custom hook for searching movies
utils/
├─ storage.ts           # AsyncStorage helpers
```

## 💻 Installation & Running

```bash
# Clone the repo
git clone <repo-url>
cd quick-movie-explorer

# Install dependencies
npm install

# Run the app in Expo Go
npx expo start
```

## 📌 Notes

* Make sure to get a free **OMDb API key**: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
* Placeholder image is used whenever a movie poster is missing or cannot be loaded
* All UI components are mobile-friendly, optimized for touch and performance

## ✅ Highlights

* **Fast iteration with Expo** – no native setup headaches
* **Type-safe code with TypeScript** – fewer runtime errors
* **Reusable components** – easy to scale
* **Mobile-native thinking** – optimized lists, touch targets, and layouts
