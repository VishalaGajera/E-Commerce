import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./Components/Main Pages/About";
import Home from "./Components/Main Pages/Home";
import Contact from "./Components/Main Pages/Contact";
import Product from "./Components/Main Pages/Product";
import ScrollToTop from "./Common/ScrollToTop";
import MainLayout from "./Layout/MainLayout";
import Signup from "./Modules/Auth/Signup";
import Login from "./modules/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Product /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
      {/* <div className="h-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/fileupload" element={<FileUpload />} />
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Product />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/editProduct" element={<EditProduct />} />
              <Route path="/productdashboard" element={<ProductDashboard />} />
              <Route path="/productcopy" element={<ProductCopy />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
}

export default App;
