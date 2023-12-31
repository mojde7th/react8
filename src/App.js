import React, { useEffect, useState } from "react";
import ProductComponent from "./components/productComponent";
import useAsync from "./hooks/useAsync";

function App() {
  const { data, getData, loading } = useAsync('products');
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && "Loading......."}
      <div className="flex flex-wrap gap-3">
        {data.map((item) => {
          return (
            <ProductComponent key={item.id} {...item} title={item.title} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
