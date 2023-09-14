import React from 'react';
import Letter from "./Letter";

interface LetterProps{
    setDragElem: (dragElem: HTMLDivElement | null)=>void,
    isRightHover: boolean,
    setIsRightHover: (isRightHover:boolean)=>void,
}
const Letters: React.FC<LetterProps> = ({setDragElem, setIsRightHover, isRightHover}) => {
    const letters: string[] = ['E','N','I','G','M','A']

    return (
        <div className='letters'>
            {letters.map((letter: string)=>
                <Letter isRightHover={isRightHover} setIsRightHover={setIsRightHover} setDragElem={setDragElem}  key={letter} letter={letter}/>
            )}
        </div>
    );
};

export default Letters;