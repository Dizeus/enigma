import React, {useState} from 'react';

interface LetterProps {
    letter: string,
    setDragElem: (dragElem: HTMLDivElement | null)=>void,
    isRightHover: boolean
    setIsRightHover: (isRightHover:boolean)=>void
}
const Letter: React.FC<LetterProps> = ({letter, setDragElem, isRightHover, setIsRightHover}) => {

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        setDragElem(e.currentTarget)
    }
    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setDragElem(null)
        if(isRightHover){
            console.log('here')
            e.currentTarget.classList.add('positioned')
        }
        setIsRightHover(false)
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
    }

    return (
        <div onDragOver={dragOverHandler} onDragStart={dragStartHandler} onDragEnd={dragEndHandler} data-letter='E' draggable className={`letter letter-${letter}`}>
            {letter}
        </div>
    );
};

export default Letter;