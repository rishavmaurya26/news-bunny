import './App.css';
import React, { Component } from 'react';
import Newsgrid  from './component/Newsgrid';
import Navbar from './component/navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div>
         
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Newsgrid   key="" country="us" category="general" pagesize="9"></Newsgrid>} />
            <Route exact path="/business" element={<Newsgrid   key="business" country="us" category="business" pagesize="9"></Newsgrid>} />
            <Route exact path="/sports" element={<Newsgrid  key="sports" country="us" category="sports" pagesize="9"></Newsgrid>} />
            <Route exact path="/entertainment" element={<Newsgrid   key="entertainment" country="us" category="entertainment" pagesize="9"></Newsgrid>} />
            <Route exact path="/science" element={<Newsgrid   key="science" country="us" category="science" pagesize="9"></Newsgrid>} />
            <Route exact path="/technology" element={<Newsgrid  key="technology" country="us" category="technology" pagesize="9"></Newsgrid>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


