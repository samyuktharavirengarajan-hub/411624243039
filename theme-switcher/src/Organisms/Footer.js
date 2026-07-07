import { useState } from "react";
import ThemeService from "../Services/ThemeService";
import Text from "../Atoms/Text";

export default function Footer(){

    const [theme, setTheme] = useState(ThemeService.getTheme());

    ThemeService.attach(setTheme);

    return (
        <footer>
            <h3>React Theme Switcher</h3>
            <Text text={"Current Theme : " + theme}/>
            <p>Developed using React • Observer Pattern • useState</p>
            </footer>
    );
};
