import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import FAQ from "./pages/FAQ";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/checkout" element={<CheckOutPage/>} />
      <Route path="/signUp" element={<SignUpPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
