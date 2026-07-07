import { useState } from "react";
import ThemeService from "../Services/ThemeService";
import Text from "../Atoms/Text";

export default function Header(){

    const [theme, setTheme] = useState(ThemeService.getTheme());

    ThemeService.attach(setTheme);

    return (
        <header>
            <h1>Theme Switcher</h1>
        </header>
    );
};