import { useState } from "react";
import ThemeService from "../Services/ThemeService";
import ThemeLabel from "../Molecules/ThemeLabel";
import Button from "../Atoms/Button";

export default function ThemePanel(){

    const [theme, setTheme] = useState(ThemeService.getTheme());

    ThemeService.attach(setTheme);

    return (
        <div>
            <ThemeLabel theme={theme}/>
            <br/>
            <Button
            text="Switch Theme"
            onClick={() => ThemeService.toggleTheme()}
            />
        </div>
    );
};