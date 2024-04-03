import React from "react";

export default function BtnComponent({value,styleStr,callBackFunc}){
    return (
        <button className="btn" style={styleStr} onClick={() => callBackFunc(value)}>{value}</button>
    )
}
