import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import CreatePost from "./CreatePost";
import Post from "./Post";
import PostList from "./PostList";
import { useState } from "react";
import PostListProvider from "./Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="container">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
