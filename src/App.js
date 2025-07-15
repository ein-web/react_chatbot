import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import Board from './pages/Board';
import Image from './pages/Image';
import Form from './pages/Form';
import Onebon from './pages/Onebon';

function App() {
    let post = "reAct Blog" // 자료 잠깐 저장할때 변수
    let count = 0
    const [count2, setCount2] = useState(0)
    const plus = () => {
        count = count + 1
        console.log("카운트 되니?", count)
        setCount2(count2 + 1)
    }
    return (
        <div>
            < Router >
                <div className="App">
                    <div className='App-header'>
                        <h4>
                            <Link
                                to="/Main"
                                style={{
                                    color: "#ffffff"
                                }}>{post}</Link>
                        </h4>
                    </div>
                    <Nav /> {/* 네비게이션 바는 여기! */}
                </div>
                <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Board" element={<Board />} />
                    <Route path="/Image" element={<Image />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Onebon" element={<Onebon />} />
                </Routes>
            </Router>
            {/* useState */
            } < div style={{ padding: "40px 0 0 40px", fontWeight: "bold", color: "#D50000", fontSize: "18px" }} > {
                count
            }</div> < div style={{ padding: "40px 0 0 20px", fontWeight: "bold", color: "#304FFE", fontSize: "18px" }} > state : {
                count2
            }</div> < button onClick={
                plus
            }
                style={{ margin: "10px 0 0 20px" }} > 중가</button>
        </div>
    );
}


export default App;