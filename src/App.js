import {React,useState,useEffect} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Screen from './components/Screen';
import KeyPad from './components/KeyPad';
import Footer from './components/Footer';

function App() {
  const [lastNumber,setLastNumber] = useState(0);
  const [currentNumber,setCurrentNumber] = useState(0);
  const [lastOpr,setLastOpr] = useState('+');
  const [currentOpr,setCurrentOpr] = useState('+');
  const [dotIsOff,setDotIsOff] = useState(1);
  const [n,setN] = useState(0);
  const [screenText,setScreenText] = useState('0')
  const [theme,setTheme] = useState(0);   //0,1,2
  const [firstAct,setFirstAct] = useState(true);

  const bg_L_C_th = ["rgba(76,91,92,0.6)","rgba(56,111,164,0.6)","rgba(220,220,221,0.6)"];
  const bg_R_C_th = ["rgba(76,91,92,0.4)","rgba(56,111,164,0.4)","rgba(220,220,221,0.4)"];
  const num_L_C_th = ["rgba(255,113,91,1)","rgba(56,111,164,1)","rgba(25,133,166,1)"];
  const num_R_C_th = ["rgba(244,136,119,1)","rgba(79,147,211,1)","rgba(59,172,201,1)"];
  const num_Font_C_th = ["#fff","#fff","#fff"];
  const opr_L_C_th = ["rgba(249,203,64,1)","rgba(132,210,246,1)","rgba(76,92,104,1)"];
  const opr_R_C_th = ["rgba(251,223,138,1)","rgba(101,183,221,1)","rgba(111,133,150,1)"];
  const opr_Font_C_th = ["#000","#000","#fff"];
  const ftr_L_C_th = ["rgba(76,91,92,1)","rgba(56,111,164,1)","rgba(70,73,76,1)"]
  const ftr_R_C_th = ["rgba(76,91,92,1)","rgba(56,111,164,1)","rgba(70,73,76,1)"]

  
  const keyPadColorPack = [num_L_C_th,num_R_C_th,opr_L_C_th,opr_R_C_th,num_Font_C_th,opr_Font_C_th]
  const footerColorPack = [ftr_L_C_th,ftr_R_C_th]
  const addDigit = (digit) => {
    const digitValue = parseInt(digit);
    const nn = (n === 0) ? 1 : n;
    const nextCurrentNumber = (10 * currentNumber + digitValue) * dotIsOff + (currentNumber + digitValue/(10 ** nn)) * (1-dotIsOff);
    setCurrentNumber(nextCurrentNumber);
    setScreenText(nextCurrentNumber);
    const nextN = (n+1)*(1-dotIsOff);
    setN(nextN);
  }

  const oprType1 = (opr1) => {
	  let nextCurrentNumber;
	//  if (lastNumber !== 0 && currentNumber === 0){
	  if (!firstAct){
		  nextCurrentNumber = lastNumber;
	  }
	  else
	  {
		  nextCurrentNumber = currentNumber;
	  }
	  if (opr1 === 'x2'){
        	nextCurrentNumber = Math.pow(nextCurrentNumber,2);
	  }
	  if (opr1 === '1/x'){
        	nextCurrentNumber = 1 / nextCurrentNumber;
	  }
	  if (opr1 === '+/-'){
        	nextCurrentNumber = - nextCurrentNumber;
	  }
	  setLastNumber(nextCurrentNumber);
	  setCurrentNumber(nextCurrentNumber);
	  setScreenText(nextCurrentNumber);
	  setLastNumber(0);
	  setDotIsOff(1);
	  setN(0);
	  setFirstAct(false);
  }

  const oprType2 = (opr2) => {
	  let nextLastNumber = lastNumber;
	  if (lastOpr === '+') {
		  nextLastNumber += currentNumber;
	  }
	  if (lastOpr === '-') {
		  nextLastNumber -= currentNumber;
	  }
	  if (lastOpr === '×') {
		  nextLastNumber *= currentNumber;
	  }
	  if (lastOpr === '÷') {
		  nextLastNumber /= currentNumber;
	  }
	  setLastNumber(nextLastNumber);
	  setScreenText(nextLastNumber);
	  setCurrentNumber(0);
	  setLastOpr(opr2);
	  setDotIsOff(1);
	  setN(0);
	  setFirstAct(false);
  }

  const dotPressed = () => {
	  setDotIsOff(0);
	
  }

  const CPressed = () => {
	  setCurrentNumber(0);
	  setLastNumber(0);
	  setScreenText(0);
	  setLastOpr('+');
	  setCurrentOpr('+');
	  setDotIsOff(1);
	  setN(0);
	  setFirstAct(true);
  }

  const EqualPressed = () => {
	  let nextLastNumber;
	  if (lastOpr === '+'){
	      nextLastNumber=lastNumber + currentNumber;
	  }
	  if (lastOpr === '-'){
	      nextLastNumber=lastNumber - currentNumber;
	  }
	  if (lastOpr === '×'){
	      nextLastNumber=lastNumber * currentNumber;
	  }
	  if (lastOpr === '÷'){
	      nextLastNumber=lastNumber / currentNumber;
	  }
	  setLastNumber(nextLastNumber);
	  setCurrentNumber(nextLastNumber);
	  setScreenText(nextLastNumber);
	  setLastOpr('+');
	  setLastNumber(0);
	  setDotIsOff(1);
	  setN(0);
	  setFirstAct(true);
  }

  const ThemeSelect = (index) => {
	  setTheme(index);
  }



  return (
    <main style={{background: `linear-gradient(${bg_L_C_th[theme]},${bg_R_C_th[theme]})`}}>
      <Header themeHandler={ThemeSelect} theme = {theme}/>
      <Screen screenText = {screenText}/>
      <KeyPad keyPadColorPack={keyPadColorPack} addDigitCallBack = {addDigit} 
              oprType1CallBack = {oprType1} oprType2CallBack = {oprType2}
              CPressedCallBack = {CPressed} EqualPressedCallBack = {EqualPressed}
              dotPressedCallBack = {dotPressed} theme={theme}
      />
      <Footer footerColorPack={footerColorPack} theme={theme}/>
    </main>
  )
}

export default App;
