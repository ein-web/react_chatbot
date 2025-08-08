
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from './pages/DarkModeContext';

import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import Board from './pages/Board';
import Image from './pages/Image';
import Form from './pages/Form';
import Onebon from './pages/Onebon';

// Header 컴포넌트 내에서 옵셔널 체이닝으로 안전하게 접근
function Header({ user, setUser }) {
    const { darkMode, toggleDarkMode } = useDarkMode();


    return (
            <div className={`App-header ${darkMode ? 'dark' : ''}`}>
                <h4>
                    <Link to="/Main" style={{ textDecoration: 'none', color: 'inherit' }} title="홈으로이동">
                        {user?.id ? `${user.id}님 블로그` : '비회원님 블로그'}
                    </Link>
                </h4>
                <button onClick={toggleDarkMode}>
                {darkMode ? 'Light 모드로 전환' : 'Dark 모드로 전환'}
            </button>
            </div>
    );
}

function BoardWrapper() {
    const { darkMode } = useDarkMode();
    return <div className={`Board ${darkMode ? 'dark' : ''}`}><Board /></div>;
}


function App({ user }) {

    const { darkMode } = useDarkMode();

    return (
        <BrowserRouter>
            <div className="App">
                <Header user={user} />
                <div className={darkMode ? 'dark' : ''}></div>
                <Nav darkMode={darkMode} />
            </div>
            <Routes>
                {/* 첫 진입(예: '/')은 /Main으로 자동 이동 */}
                <Route path="/" element={<Navigate to="/Board" replace />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Board" element={<BoardWrapper />} />
                <Route path="/Image" element={<Image />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Onebon" element={<Onebon />} />
            </Routes>
        </BrowserRouter>
    );
}

// 최상위 렌더링 예시: DarkModeProvider를 감싸기
export default function Root({ user }) {
    return (
        <DarkModeProvider>
            <App user={user} />
        </DarkModeProvider>
    );
}