import { useState } from "react";

export default function BGcolor() {

    const [bgColor, setBgColor] = useState("white");

    return (
        <div
            style={{
                backgroundColor: bgColor,
                height: "100vh",
                textAlign: "center",
                paddingTop: "50px"
            }}
        >
            <h1>Background Color Changer</h1>

            <button onClick={() => setBgColor("red")}>Red</button>

            <button onClick={() => setBgColor("green")}>Green</button>

            <button onClick={() => setBgColor("blue")}>Blue</button>

            <button onClick={() => setBgColor("yellow")}>Yellow</button>

            <button onClick={() => setBgColor("white")}>Reset</button>
        </div>
    );
}