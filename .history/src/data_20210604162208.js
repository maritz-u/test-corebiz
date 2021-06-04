import React from "react";
import useFetch from "react-fetch-hook";
export default function App() {
  const { isLoading, error, data } = useFetch(
    "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
  );
  if (isLoading) return "Loading...";
  if (error) return "Error!";
  return (
    <>
      <img src={data.results[0].picture.medium} alt="random user" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

// import React, { useEffect, setState } from "react";

// const corebizData = () => {
//   useEffect(() =>
//     fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
//       .then((response) => response.json())
//       .then((datajson) => {
//         this.setState({ data: datajson.result });
//       })
//   );
// };

// export default corebizData;
