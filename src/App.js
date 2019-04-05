import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialog from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path = '/dialogs' component = {Dialog} />
        <Route path = '/profile' render = { () => <Profile posts = {props.posts}/>} />
        <Route path = '/news' component = {News} />
        <Route path = '/music' component = {Music} />
        <Route path = '/settings' component = {Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
