import './App.css';
import Auth from './components/authtorization'
import Main from './components/Main'
import { Route, Routes} from "react-router-dom";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path={'/main'} element={<Main/>}/>
                <Route exact path={'/login'} element={<Auth/>}/>
            </Routes>
        </div>
    );
}

export default App;
