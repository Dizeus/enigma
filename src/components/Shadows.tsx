import React from 'react';
import LetterShadow from "./LetterShadow";

interface ShadowsProps{
   dragElem: HTMLDivElement | null,
    isRightHover: boolean
    setIsRightHover: (isRightHover:boolean)=>void
}
const Shadows: React.FC<ShadowsProps> = ({dragElem, isRightHover, setIsRightHover}) => {
    const letterShadows: string[] = ['E','N','I','G','M','A']
    return (
        <div className='shadows'>
            {letterShadows.map((letter: string)=>
                <LetterShadow isRightHover={isRightHover} setIsRightHover={setIsRightHover} dragElem={dragElem}  key={letter} letter={letter}/>
            )}
        </div>
    );
};

export default Shadows;