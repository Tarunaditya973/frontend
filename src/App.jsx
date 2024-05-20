import { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();
  useEffect(()=> {
    if (!localStorage.getItem("user")) {
      navigate("/threads");
    } else {
      navigate("/login");
    }
  },[])
  
  return <></>;
}
