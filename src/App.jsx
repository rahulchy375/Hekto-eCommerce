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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/faq" element={<FAQ/>} />
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
