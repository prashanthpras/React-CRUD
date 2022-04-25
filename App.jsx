import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';
import CreatePost from './components/posts/CreatePost';
import DeletePost from './components/posts/DeletePost';
import EditPost from './components/posts/EditPost';




const App = () => {
  return (
    
       <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/delete-post/:id" element={<DeletePost/>}/>
        <Route path="/update-post/:id" element={<EditPost/>}/>

      </Routes>

    </Router>
    
  
  )
}

export default App