import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/portfolio" element={<Layout />}></Route>
        <Route path="/pages" element={<Layout />}></Route>
        <Route path="/blog" element={<Layout />}></Route>
        <Route path="/shop" element={<Layout />}></Route>
        <Route path="/support" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
