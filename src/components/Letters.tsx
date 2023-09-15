import React from 'react';
import Letter from "./Letter";

interface LetterProps{
    setDragElem: (dragElem: HTMLDivElement | null)=>void,
    isRightHover: boolean,
    setIsRightHover: (isRightHover:boolean)=>void,
    setLock: (lock:number)=>void,
    lock: number
}
const Letters: React.FC<LetterProps> = ({setDragElem, setIsRightHover, isRightHover, setLock, lock}) => {
    const letters: string[] = ['E','N','I','G','M','A']

    return (
        <div className='letters'>
            {letters.map((letter: string)=>
                <Letter lock={lock} setLock={setLock} isRightHover={isRightHover} setIsRightHover={setIsRightHover} setDragElem={setDragElem}  key={letter} letter={letter}/>
            )}
        </div>
    );
};

export default Letters;