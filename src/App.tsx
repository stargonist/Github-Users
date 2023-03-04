import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
import {Header} from "./application/components/Header/Header";
import {Footer} from "./application/components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/:username" element={<Dashboard/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
