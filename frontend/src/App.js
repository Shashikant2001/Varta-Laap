import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
// import {
// createBrowserRouter,
// RouterProvider,
// Route,
// Link,
// } from "react-router-dom";
//
// const router = createBrowserRouter([
// {
// path: "/",
// element: <Homepage />,
// },
// {
// path: "/chats",
// element: <ChatPage />,
// },
// ]);
function App() {
  // return (
  // <div className="App">
  {
    /* <RouterProvider router={router} /> */
  }
  {
    /* </div> */
  }
  // );
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
