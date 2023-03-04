import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
import {Header} from "./pages/components/Header/Header";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/:username" element={<Dashboard/>}/>
            </Routes>
        </>
    )
}

export default App
