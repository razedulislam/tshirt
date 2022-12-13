import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/OrderReview" element={<OrderReview />} />
                <Route path="/home" element={<Header />} />
                <Route path="/grandpa" element={<Grandpa />} />
            </Routes>
        </>
    );
}

export default App;
