import React from "react";


export default function ThemeSelector({theme,ThemeSelect}){
    return (
        <section id="theme-selector-section">
            <button className="theme-circle" id="theme-1" onClick = {() => ThemeSelect(0)}></button>
            <button className="theme-circle" id="theme-2" onClick = {() => ThemeSelect(1)}></button>
            <button className="theme-circle" id="theme-3" onClick = {() => ThemeSelect(2)}></button>
        </section>
    )
}
