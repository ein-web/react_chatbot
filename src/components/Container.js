// src/components/Container.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Board from '../pages/Board';
import Image from '../pages/Image';
import Form from '../pages/Form';
import Onebon from '../pages/Onebon';

function Container() {

    return (
      < Router >

        <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Board" element={<Board />} />
                    <Route path="/Image" element={<Image />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Onebon" element={<Onebon />} />
                </Routes>
                </Router>
    )
}


export default Container;

