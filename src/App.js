import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import Collectioncard from "./components/Products/CollectionCard";
import CollectionCard from "./components/Products/CollectionCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
