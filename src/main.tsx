import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./assets/globalStyle";
import PostsProvider from "./context/postsContext";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./assets/css/index.css";
import InEditingContextProvider from "./context/InEditingContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <PostsProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
        <InEditingContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </InEditingContextProvider>
      </Router>
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
