// import { useContext, useEffect } from "react";
// import { DarkContext } from "../layouts/Layout";

// export default function useDarkMode() {
//     const [isDarkMode, setIsDarkMode] = useContext(DarkContext);

//     // Add or remove dark mode class on documentElement which is the root <html> element
//     // Then, save user preference to local storage
//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("isDarkMode", "true")
//         } else {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("isDarkMode", "false")
//         }
//     }, [isDarkMode]);

//     function toggleDarkMode() {
//         setIsDarkMode((prevState) => !prevState);
//     }

//     return [isDarkMode, toggleDarkMode];
// }
