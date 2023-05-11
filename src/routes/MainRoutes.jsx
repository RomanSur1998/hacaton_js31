import React from "react";
import CollectionList from "../components/Products/CollectionList";
import { Route, Routes } from "react-router-dom";
import AuthPAge from "../components/Products/AuthPage";
import AddProduct from "../components/Products/AddProduct";

const MainRoutes = () => {
  const COLLECTION_ROUTES = [
    { link: "/", element: <CollectionList />, id: 1 },
    { link: "/admin", element: <AuthPAge />, id: 2 },
    { link: "/add", element: <AddProduct />, id: 2 },
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
