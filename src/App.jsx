import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from "./Hero.jsx";
import Status from './Status.jsx';
import Footer from './Footer.jsx';
import MyPosts from './MyPosts.jsx';
import RecentPosts from './RecentPosts.jsx';
import EditPost from './EditPost.jsx';
import DeletePost from './DeletePost.jsx';
import CreatePost from './CreatePost.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Status />
      <RecentPosts />
      <MyPosts />
      <EditPost />
      <DeletePost />
      <CreatePost />
      <Footer />
    </>
  )
}

export default App
