import React, { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
      .then((response) => {
        if (response.ok) {
          return response.json.setData();
        }
        throw response;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
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
