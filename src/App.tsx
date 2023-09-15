import Background from "./components/Background";
import './styles/css/App.css'
import Shadows from "./components/Shadows";
import Letters from "./components/Letters";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
const  App = () => {
    const [dragElem, setDragElem] = useState<HTMLDivElement | null>(null)
    const [isRightHover, setIsRightHover] = useState<boolean>(false)
    const [lock, setLock] = useState<number>(0)
    return (
        <div className='app'>
            <Background/>
            <Shadows isRightHover={isRightHover} setIsRightHover={setIsRightHover} dragElem={dragElem}/>
            <Letters lock={lock} setLock={setLock} isRightHover={isRightHover} setIsRightHover={setIsRightHover} setDragElem={setDragElem}/>
            {lock===6 && <input className={'input'} type="text"/>}
        </div>
    )
};

export default App;