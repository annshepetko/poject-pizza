import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/MainPage";
import EatPage from "./components/secondPage/EatPage";
import {Form} from "./form/Form";
import {useSpring,animated } from "react-spring";
import axios from "axios";
import {baseUrl} from "./constants";
import AuthForm from "./components/authForms/authForm/AuthForm";
import AuthPage from "./components/authForms/AuthPage";

export const MyContext = React.createContext(null);


const App = () => {
    const [contextState, setContextState] = useState([]);

    useEffect(() => {
        loadPizza()
    }, []);
    const loadPizza = async () => {
        try {
            const response = await axios.get(baseUrl + "/pizza");
            const newContext = response.data.map(pizza => ({
                ...pizza,
                image: baseUrl + "/get-image?imageName=" + pizza.id
            }));
            setContextState(newContext);
        } catch (error) {
            console.error("Error loading pizza:", error);
        }
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
                        <Route path = '/register' element={<AuthPage isRegisterForm={true} headerMessage={"Зареєструйтесь"}/>} />
                        <Route path = '/authenticate' element={<AuthPage isRegisterForm={false} headerMessage={"Авторизуйтесь"} />} />
                    </Routes>
                </animated.div>

            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;

