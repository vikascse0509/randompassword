import React, { useState } from 'react'
import './App.css';
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+={}[]\|;:''/?";
const App = () => {
  const [length, setLength] = useState(8)
  const [lowercaseValue, setLowercaseValue] = useState(true)
  const [uppercaseValue, setUppercaseValue] = useState(true)
  const [numberValue, setNumberValue] = useState(true)
  const [symbolValue, setSymbolValue] = useState(false)
  const [password, setPassword] = useState('')
  const generatePassword = () =>{
    let characters = "";
    let newPassword = "";
    if(lowercaseValue) characters += lowercase;
    if(uppercaseValue) characters += uppercase;
    if(numberValue) characters += numbers;
    if(symbolValue) characters += symbols;
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
      
    }
    setPassword(newPassword)
  }
  return (
    <>
    <div className='max-w-[600px] mx-auto my-[100px] p-[25px] border-[1px] shadow-lg rounded-[8px]'>
      <h1 className='text-center mt-[2px] font-bold text-3xl'>Password Generator</h1>
      <div className=']'>
        <input type="text" value={password} readOnly className='shadow-md mt-[20px] text-[24px] text-center p-[10px] border-none rounded-[5px] background-[#f9f9f9]'/>
        <button onClick={generatePassword} className='mt-[20px] text-white bg-[#4caf50] border-none border-[5px] p-[10px] cursor-pointer text-[16px] font-bold ml-[5px] rounded-[5px]'>Generate Password</button>
      </div>
      <div className=''>
        <label htmlFor="" className='flex items-center mx-auto my-[10px]'>Password Length</label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} min={8} max={64} />
        </div>
        <div>
        <label htmlFor="" className='flex items-center mx-auto my-[10px]'>Include Lowercase</label>
        <input type="checkbox" checked={lowercaseValue} onChange={() => setLowercaseValue(!lowercaseValue)}/>
        </div>
        <div>
        <label htmlFor="" className='flex items-center mx-auto my-[10px]'>Include Uppercase</label>
        <input type="checkbox" checked={uppercaseValue} onChange={() => setUppercaseValue(!uppercaseValue)}/>
        </div>
        <div>
        <label htmlFor="" className='flex items-center mx-auto my-[10px]'>Include Numbers</label>
        <input type="checkbox" checked={numberValue} onChange={() => setNumberValue(!numberValue)}/>
        </div>
        <div>
        <label htmlFor="" className='flex items-center mx-auto my-[10px]'>Inlcue Symbols</label>
        <input type="checkbox" checked={symbolValue} onChange={() => setSymbolValue(!symbolValue)}/>
        </div>
        </div>
    </>
  )
}

export default App