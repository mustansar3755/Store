import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';


const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className=" bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Nav />
          <hr />
          <div className=" flex w-full">
            <Sidebar />
            <div className="">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/order" element={<Order />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
