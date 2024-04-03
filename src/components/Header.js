import React from "react";
import ThemeSelector from "./ThemeSelector";


export default function Header({theme,themeHandler}){
	const style0 = {color: theme === 2 ? '#000': '#fff'}
    return (
        <section id="header-section">
            <p style={style0}>React Calculator</p>
            <ThemeSelector ThemeSelect={themeHandler} theme={theme}/>
        </section>
    )
}
