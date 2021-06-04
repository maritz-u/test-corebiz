import React, { useEffect, setState } from "react";

const corebizData = () => {
  useEffect(() =>
    fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
      .then((response) => response.json())
      .then((datajson) => {
        this.setState({ data: datajson.result });
      })
  );
};

export default corebizData;
