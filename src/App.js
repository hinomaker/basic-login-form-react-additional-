import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SignUp } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
