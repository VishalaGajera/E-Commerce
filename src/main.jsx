import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./Providers/AuthProvider.jsx";
import { ProductProvider } from "./Providers/ProductCategoryContext.jsx";
import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

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
