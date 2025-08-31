# Quick Movie Explorer

A lightweight mobile app built with **React Native + Expo** that lets users quickly search for movies, view details, and save favorites locally.

This project demonstrates **API fetching, navigation, state management, local storage, and polished UI** using TypeScript.

## 🚀 Features

* **Search Movies:** Search for movies using the [OMDb API](http://www.omdbapi.com/).
* **Movie Details:** View poster, title, year, rating, plot, and more.
* **Favorites & Watch Later:** Save favorite movies and watch-later list locally using AsyncStorage.
* **Placeholder Images:** Automatically fallback to a placeholder if a movie poster is missing or broken.

## 🛠 Tech Stack

* **React Native + Expo** – Cross-platform mobile development
* **TypeScript** – Type safety for scalable code
* **React Navigation (Tabs & Stack)** – Multi-screen navigation
* **AsyncStorage** – Local storage for favorites and watch later
* **OMDb API** – Public movie database API
* **StyleSheet / NativeWind** – Clean and responsive UI

## 📝 Screens

| Screen            | Features                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------- |
| **Home / Search** | Search bar, list of movie posters/titles (`FlatList`), API fetch                          |
| **Details**       | Big poster (preserves aspect ratio), title, year, rating, plot, “Add to Favorites” button |
| **Favorites**     | View locally saved favorite movies                                                        |
| **Watch Later**   | View locally saved movies for later viewing                                               |

## 📁 File Structure

```
quick-movie-explorer/
├─ app/
│  ├─ (tabs)/
│  │  ├─ index.tsx           # Home screen (search)
│  │  ├─ favourites.tsx      # Favorites screen
│  │  ├─ watch-later.tsx     # Watch Later screen
│  │  ├─ _layout.tsx         # Tab navigation layout
|  ├─ _layout.tsx            # Root layout
│  ├─ details.tsx            # Movie details screen
├─ assets/
│  ├─ adaptive-icon.png
│  ├─ placeholder.png        # Default poster image
├─ components/
│  ├─ ActionButton.tsx
│  ├─ ClearButton.tsx
│  ├─ MovieCard.tsx
│  ├─ MovieList.tsx
│  ├─ ToggleListButton.tsx
├─ hooks/
│  ├─ useMovies.ts           # Custom hook for searching movies
├─ utils/
│  ├─ storage.ts             # AsyncStorage helpers
├─ App.tsx
├─ app.json
├─ package.json
├─ tsconfig.json
└─ README.md
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

## ⚡ Optional Enhancements

* Splash screen using Expo’s SplashScreen API
* Pull-to-refresh for search results
* Offline support: favorites load without API

## 📌 Notes

* Make sure to get a free **OMDb API key**: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
* All poster images use a placeholder when missing or broken.
* UI is optimized for mobile touch targets, `FlatList` performance, and responsiveness.

## ✅ Highlights

* **Fast iteration with Expo** – no native setup headaches
* **Type-safe code with TypeScript** – fewer runtime errors
* **Reusable components** – easy to scale
* **Mobile-native thinking** – optimized lists, touch targets, and layouts
