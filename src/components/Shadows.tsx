import React from 'react';
import LetterShadow from "./LetterShadow";

const Shadows = () => {
    const letterShadows: string[] = ['E','N','I','G','M','A']
    return (
        <div className='shadows'>
            {letterShadows.map((letter: string)=>
                <LetterShadow key={letter} letter={letter}/>
            )}
        </div>
    );
};

export default Shadows;