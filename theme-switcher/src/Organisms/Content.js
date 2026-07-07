import { useState } from "react";
import ThemeService from "../Services/ThemeService";

export default function Content(){

    const [theme, setTheme] = useState(ThemeService.getTheme());

    ThemeService.attach(setTheme);

    return (
        <div className="content">
            <h2>Welcome to the Theme Switcher</h2>
            <p>
                This project demonstrates how the Observer Pattern works in React using
                <strong> useState </strong>.
                Click the button above to instantly switch between
                <b> Light </b> and
                <b> Dark </b> themes.
            </p>
        </div>
    );
}