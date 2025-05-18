import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProductProvider } from "./Providers/ProductCategoryContext";
import { AuthProvider } from "./Providers/AuthProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <App />
        <ToastContainer />
      </ProductProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AuthProvider>
);
