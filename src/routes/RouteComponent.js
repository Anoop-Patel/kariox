import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../page";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};

export default RouteComponent;
