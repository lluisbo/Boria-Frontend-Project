import { useState } from "react"


export const UseSpreadColor = () => {

    const [value, setValue] = useState([])

    function spanWord(){
        arraycolors = ['red','blue','yellow','orange']
        
        setValue(value)
       
    }
    
  return (
      <div>
          <span style={{color: spanWord}}></span>
      </div>
  )
}