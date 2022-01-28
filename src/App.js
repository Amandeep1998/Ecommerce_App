import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

// Json Data
import products from "./backend/products.json";
import category from "./backend/category.json";

//Material UI
import Header from "./components/Header";

const App = () => {
  let [searchVal, setSearchVal] = useState(null);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              category={category}
              searchVal={searchVal}
              setSearchVal={setSearchVal}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
