import React from 'react';

interface LetterShadowProps {
    letter: string
}
const LetterShadow: React.FC<LetterShadowProps> = ({letter}) => {
    return (
        <div className='letter-shadow'>
            letter
        </div>
    );
};

export default LetterShadow;