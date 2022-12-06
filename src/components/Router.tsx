import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Main from './main';
import PortFolio from './portfolio/index';
import NotFound from './notfound/index';

export default function AppRouter() {
  return (
    <Router>
        <Switch>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='/portfolio' element={<PortFolio/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Switch>
    </Router>
  );
}
