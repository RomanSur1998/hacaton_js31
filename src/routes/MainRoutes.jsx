import React from "react";
import CollectionList from "../components/Products/CollectionList";
import { Route, Routes } from "react-router-dom";
import AuthPAge from "../components/Products/AuthPage";
import AddProduct from "../components/Products/AddProduct";
import EditProduct from "../components/Products/EditProduct";
import Cart from "../components/Cart/Cart";

const MainRoutes = () => {
  const COLLECTION_ROUTES = [
    { link: "/", element: <CollectionList />, id: 1 },
    { link: "/admin", element: <AuthPAge />, id: 2 },
    { link: "/add", element: <AddProduct />, id: 3 },
    { link: "/edit/:id", element: <EditProduct />, id: 4 },
    { link: "/cart", element: <Cart />, id: 5 },
  ];
  return (
    <>
      <Routes>
        {COLLECTION_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
