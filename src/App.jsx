import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Main Pages/About";
import Home from "./Components/Main Pages/Home";
import Contact from "./Components/Main Pages/Contact";
import Product from "./Components/Main Pages/Product";
import ScrollToTop from "./Common/ScrollToTop";
import MainLayout from "./Layout/MainLayout";
import Signup from "./Modules/Auth/Signup";
import Login from "./Modules/Auth/Login";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import PublicRoute from "./Components/Auth/PublicRoute";
import ShoppingCart from "./Modules/Product/ShoppingCart";
import Checkout from "./Modules/Product/Checkout";
import PaymentForm from "./Modules/Product/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
           <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/shopping-cart",
        element: (
          <ProtectedRoute>
            <ShoppingCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
           </ProtectedRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <PaymentForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </>
  );
}

export default App;
