import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Category, Home, ItemDetail } from "../pages";

export const MainRouter = () => {
    return (<Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/item/:id" element={<ItemDetail />}/>
        <Route path="/category/:id" element={<Category />}/>
    </Routes>
    </Router>
    );
};

