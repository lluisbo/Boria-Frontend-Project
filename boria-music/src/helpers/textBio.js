import {UseHover} from '../components/customhooks/useHover'

export const BioText = () => {
    const [ hoverOnBIO, isHovered ] = UseHover();
    const upperCaseColor = 'orange';
    
    return (
        <p className='p'
           ref={hoverOnBIO}
            style={{color: isHovered ? '#808080' : !isHovered,
            letterSpacing: isHovered ? '2.3mm' : '1.0mm',
            transition: '3.3s', textAlign: 'left'}}
            >

            " A <span style={{ color: upperCaseColor }}>SINGER</span>/ 
            <span style={{ color: upperCaseColor }}>SONGWRITER</span>
            <br />and<span style={{ color:  upperCaseColor }}> GUITARIST</span>
            <br />born in<span style={{ color: upperCaseColor }}> BARCELONA</span>,
            <br /> Boria makes a blending<span style={{ color: upperCaseColor }}> DARK</span>,
            <br /><span style={{ color: upperCaseColor }}>INDIE</span>-<span style={{ color: upperCaseColor }}>FOLK</span>
            <br />with synthesizer and<span style={{color: upperCaseColor }}> PEDALS EFFECTS</span>
            <br />right through  
            <br />his acoustic 
            <br /><span style={{ color: upperCaseColor}}>GUITAR</span>  
            <br />painting melancholy portraits of 
            <br /><span style={{ color: upperCaseColor }}>LIFE</span>,<span style={{ color: upperCaseColor }}>DEATH</span>, and <span style={{ color: upperCaseColor }}> LOVE</span>
            ".
        </p>
    )
} 