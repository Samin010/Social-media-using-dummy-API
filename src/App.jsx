import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
