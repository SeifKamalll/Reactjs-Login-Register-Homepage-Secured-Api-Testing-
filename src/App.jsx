import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginpage";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="w-full h-dvh flex justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}>
          <Route path="/Products" element={<h1 className="text-xl text-white text-center">Products Page</h1>}/>
          <Route path="/Aboutus" element={<h1 className="text-xl text-white text-center">About Us</h1>}/>
          <Route path="/social" element={<h1 className="text-xl text-white text-center">Contact Social Media</h1>}/>
          </Route>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element={<h1 className=" text-4xl text-white text-center">Error 404 | Page Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}