import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Main from './pages/Main';
import Board from './pages/Board';
import About from './pages/About';
import View from './pages/View';



function App() {
    let post = "reAct Blog" // 자료 잠깐 저장할때 변수
    return (
        <>
            <Router>
                <div className="App">
                    <div className='App-header'>
                        <h4><Link to="/Main" style={{ color: "#ffffff" }}>{post}</Link></h4>
                    </div>
                    <Nav /> {/* 네비게이션 바는 여기! */}
                </div>
                <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="Board" element={<Board />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/View" element={<View />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
