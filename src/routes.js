import Index from "./pages/index/Index";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";
import Stores from "./pages/stores/Stores";


let routes = [
  { path: "/", element: <Index /> },
  { path: "/product-list/", element: <ProductList /> },
  { path: "/product-detail", element: <ProductDetail /> },
  { path: "/stores", element: <Stores /> },
  // { path: "*", element: <NotFound /> },
];

export default routes;
