import React, {useState} from 'react';

interface LetterShadowProps {
    letter: string,
    dragElem: HTMLDivElement | null,
    isRightHover: boolean
    setIsRightHover: (isRightHover:boolean)=>void
}
const LetterShadow: React.FC<LetterShadowProps> = ({letter, dragElem, isRightHover, setIsRightHover}) => {


    const DragEnterHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        if(e.currentTarget.textContent === dragElem?.textContent){
            console.log(e.currentTarget.textContent, dragElem?.textContent)
            e.currentTarget.classList.add('letter-light')
            setIsRightHover(true)
        }
    }
    const DragOverHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
    }
    const DragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.currentTarget.classList.remove('letter-light')
        setIsRightHover(false)
    }
    const DropHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        if(isRightHover){
            e.currentTarget.classList.remove('letter-light')
            e.currentTarget.classList.remove('letter-shadow')
            e.currentTarget.classList.add('done')
        }
    }
    return (
        <div onDrop={DropHandler} onDragOver={DragOverHandler} onDragEnter={DragEnterHandler} onDragLeave={DragLeaveHandler} className={'letter-shadow'}>
            {letter}
        </div>
    );
};

export default LetterShadow;