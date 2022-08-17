import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/MainPage";
import EatPage from "./components/secondPage/EatPage";
import {initialState} from "./context/initialState";
import {Form} from "./form/Form";

export const MyContext = React.createContext(null);

const App = () => {
    const [contextState, setContextState] = useState(initialState);

    return (
        <MyContext.Provider value={[contextState, setContextState]}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/eat" element={<EatPage/>}/>
                        <Route path = '/form' element={<Form/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </MyContext.Provider>

    );
}

export default App;

