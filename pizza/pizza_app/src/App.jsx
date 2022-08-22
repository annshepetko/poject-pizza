import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/MainPage";
import EatPage from "./components/secondPage/EatPage";
import {initialState} from "./context/initialState";
import {Form} from "./form/Form";
import {BurgerPage} from "./components/thirdPage/BurgerPage";
import {useSpring,animated } from "react-spring";

export const MyContext = React.createContext(null);
export const BurgerContext = React.createContext(null)

const App = () => {
    const [contextState, setContextState] = useState(initialState.pizza);
    let [contextStateBurger, setContextStateBurger] = useState(initialState.burgers)
    const animationStyles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration: 500}})
    return (
        <MyContext.Provider value={[contextState, setContextState]}>
            <BrowserRouter>
                <BurgerContext.Provider value={[contextStateBurger, setContextStateBurger]}>
                <animated.div style={animationStyles} className="App">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/pizza" element={<EatPage/>}/>
                        <Route path = '/form' element={<Form/>}/>
                        <Route path = "/burgers" element={<BurgerPage/>}/>
                    </Routes>
                </animated.div>
                </BurgerContext.Provider>
            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;

