import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)                          //Length state
  const [numberAllowed, setNumberAllowed] = useState(false);      //Number state
  const [charAllowed, setCharAllowed] = useState(false)        //Character state
  const [password, setPassword] = useState("")            //Password state


  //useRef hook
  const passwordRef = useRef(null)                //Ref to store the password

  //it is used to store the reference of the element in the DOM

  //Password generator function
  const passwordGenerator = useCallback(() => {          //Callback function
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  //String of characters
    if (numberAllowed) str += "0123456789"                            //If numberAllowed is true, add numbers to the string
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"                       //If charAllowed is true, add special characters to the string

    for (let i = 1; i <= length; i++) {                                 //Loop to generate password
      let char = Math.floor(Math.random() * str.length + 1)             //Random number to select a character from the string
      pass += str.charAt(char)                                  //Add the selected character to the password
      
    }

    setPassword(pass)      //Set the password


  }, [length, numberAllowed, charAllowed, setPassword])  //Callback dependencies in array it optimizes the function 



//Copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {         //Callback function to copy password to clipboard
    passwordRef.current?.select();                        //Select the password
    
    passwordRef.current?.setSelectionRange(0, 999);       //Set the selection range
    window.navigator.clipboard.writeText(password)        //Copy the password to clipboard
    .then(() => {
      alert('Password copied to clipboard successfully!');    //Alert message
    })
    .catch(err => {
      alert('Failed to copy the password: ' + err);
    });
    
  }, [password])                              //Callback dependencies



  //useEffect hook
  useEffect(() => {           //useEffect hook to generate password
    passwordGenerator()         //Call the passwordGenerator function
  }, [length, numberAllowed, charAllowed, passwordGenerator])   //if any change in these dependencies, the useEffect hook will run


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">     
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'             //Range input to set the length of the password
         onChange={(e) => {setLength(e.target.value)}}   //Set the length of the password
          />
          <label>Length: {length}</label>         
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {            //Checkbox to allow numbers in the password
              setNumberAllowed((prev) => !prev);      //Toggle the numberAllowed state
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {                 //Toggle the charAllowed state
                  setCharAllowed((prev) => !prev ) //Checkbox to allow special characters in the password
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App