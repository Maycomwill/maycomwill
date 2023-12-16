import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../hooks/useTheme";
import { useEffect } from "react";

export function AppRouter() {
  const {setTheme} = useTheme()
  useEffect(()=>{setTheme("dark")},[])
  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col text-gray-100">
        <div className="flex">
          <Header />
        </div>
        <div className="flex flex-1">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route
              path={"/aaa/aaa/aa/a/a/aaa/aaa/a/a/a"}
              element={<Header />}
            />
          </Routes>
        </div>
        <div className="flex">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
