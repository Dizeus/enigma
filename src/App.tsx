import Background from "./components/Background";
import './styles/css/App.css'
import Shadows from "./components/Shadows";
import Letters from "./components/Letters";
import {useState} from "react";
const  App = () => {
    const [dragElem, setDragElem] = useState<HTMLDivElement | null>(null)
    const [isRightHover, setIsRightHover] = useState<boolean>(false)
    return (
        <div className='app'>
            <Background/>
            <Shadows isRightHover={isRightHover} setIsRightHover={setIsRightHover} dragElem={dragElem}/>
            <Letters isRightHover={isRightHover} setIsRightHover={setIsRightHover} setDragElem={setDragElem}/>
        </div>
    )
};

export default App;