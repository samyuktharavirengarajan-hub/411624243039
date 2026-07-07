import { useState } from "react";
import HomePage from "./Pages/HomePage";
import ThemeService from "./Services/ThemeService";
import "./App.css";

function App() {

  const [theme, setTheme] = useState(ThemeService.getTheme());

  ThemeService.attach(setTheme);

  return (
    <div
      className ={theme === "Light" ? "light" : "dark"}>
      <HomePage />
    </div>
  );
}

export default App;