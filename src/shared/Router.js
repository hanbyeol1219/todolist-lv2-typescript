import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutTodo from "../pages/AboutTodo";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="aboutTodo/:id" element={<AboutTodo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
