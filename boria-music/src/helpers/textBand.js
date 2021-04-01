import React, {UseHover} from '../components/customhooks/useHover'

export const BandText = () =>{
    const [ hoverOnBand, hovered ] = UseHover();
    const upperCaseColorTwo = 'grey'; 

    return (

        <p className='p' 
           ref={hoverOnBand}
           style={{color: hovered ? '#ffa500' : !hovered,
           letterSpacing: hovered ? '2.3mm' : '1.0mm',
           transition: '3.3s', textAlign: 'left'}}
        >
            <span style={{ color: upperCaseColorTwo }}>
            BAND</span>
             Núria Maynou, Gemma Lloret,<br /> 
             Jordi Masana, Àngel Abad.          
            </p>
                      
    )
}