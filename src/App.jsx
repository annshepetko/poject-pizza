import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/MainPage";
import EatPage from "./components/secondPage/EatPage";
import {Form} from "./form/Form";
import {useSpring,animated } from "react-spring";
import axios from "axios";

export const MyContext = React.createContext(null);


const App = () => {
    const [contextState, setContextState] = useState([]);

    useEffect(() => {
        loadPizza()
    }, []);

    const loadPizza = async () =>{
        const response = await axios.get("http://localhost:8080/pizza");
        setContextState(response.data)
        console.log(contextState)
    }

    const animationStyles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration: 500}})
    return (
        <MyContext.Provider value={[contextState, setContextState]}>
            <BrowserRouter>

                <animated.div style={animationStyles} className="App">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/pizza" element={<EatPage/>}/>
                        <Route path = '/form' element={<Form/>}/>

                    </Routes>
                </animated.div>

            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;

