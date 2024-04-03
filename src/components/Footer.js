import React from "react";


export default function Footer({footerColorPack,theme}){
    const ftr_L_C_th = footerColorPack[0][theme]
    const ftr_R_C_th = footerColorPack[1][theme]
    const footerbgStyle = {background: `linear-gradient(${ftr_L_C_th},${ftr_R_C_th})`}

    return (
        <footer style={footerbgStyle}>
            <p>Implemented by <a href="https://twitter.com/codinggeek1984" target="_blank">Mahdi Balali</a></p>
        </footer>
    )
}
