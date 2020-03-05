import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import UserList from './components/UserList'
import PostList from './components/PostList'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={UserList}/>
      <Route exact path="/user/:id" component={PostList}/>
    </BrowserRouter>
  );
}

export default App;
