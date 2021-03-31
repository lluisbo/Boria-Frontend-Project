import React from "react";
import "./customButton.css";

const STYLES = [
      /* e.g  "btn-primary-solid"*/ /* Default button*/
      "btn--vertical--outline",
     
    ];

const SIZES = [
      /* e.g "Btn--small", "Btn--standard"*/
    ];

// MAIN COMPONENT.
    export const Button = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {

        const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle 
        : STYLES[0];
        
        const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0]; 
    
        return (

            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
    /* e.g <Button 
              onClick={handleClick} 
              type='button' 
              buttonStyle='btn--primary--solid'
              buttonSize='btn--small'
           >
              Click Me
           </Button>*/
  );
};