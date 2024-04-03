import React from "react";
import BtnComponent from "./BtnComponent";

export default function KeyPad({keyPadColorPack,addDigitCallBack,oprType1CallBack,oprType2CallBack,CPressedCallBack,EqualPressedCallBack,dotPressedCallBack,theme}){
    const regionIButtonValues = [0,1,2,3,4,5,6,7,8,9,'.','+/-'];

    const numericBtnValues = [0,1,2,3,4,5,6,7,8,9];
    const OprType1BtnValues = ['1/x','x2','+/-'];
    const OprType2BtnValues = ['÷','×','-','+'];
    const AllBtnValues = ['C','1/x','x2','÷',7,8,9,'×',4,5,6,'-',1,2,3,'+','.',0,'+/-','=']
    const num_L_C_th = keyPadColorPack[0][theme]
    const num_R_C_th = keyPadColorPack[1][theme]
    const opr_L_C_th = keyPadColorPack[2][theme]
    const opr_R_C_th = keyPadColorPack[3][theme]   
    const num_Font_C_th = keyPadColorPack[4][theme]
    const opr_Font_C_th = keyPadColorPack[5][theme]

    const selectCallBackFunc = (btnValue) => {
        if (numericBtnValues.includes(btnValue)){
            return addDigitCallBack;
        }
        if (OprType1BtnValues.includes(btnValue)){
            return oprType1CallBack;
        }
        if (OprType2BtnValues.includes(btnValue)){
            return oprType2CallBack;
        }
        if (btnValue === '='){
            return EqualPressedCallBack;
        }
        if (btnValue === '.'){
            return dotPressedCallBack;
        }
        if (btnValue === 'C'){
            return CPressedCallBack;
        }
    }

    const numericBtnStyle = {background: `linear-gradient(${num_L_C_th},${num_R_C_th})`, color: num_Font_C_th}
    const oprBtnStyle = {background: `linear-gradient(${opr_L_C_th},${opr_R_C_th})`, color:opr_Font_C_th}
    const AllBtnArray = AllBtnValues.map((element) => 
        <BtnComponent 
                    styleStr = {regionIButtonValues.includes(element) ? numericBtnStyle : oprBtnStyle}
                    value={element}
                    callBackFunc = {selectCallBackFunc(element)}
                    />)

    return (
        <section id="keypad-section">
            {AllBtnArray}
        </section>
    )
}
