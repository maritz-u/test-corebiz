import React from "react";

class dataCorebiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
      .then((response) => response.json())
      .then((datajson) => this.setState({ data: datajson.result }));
  }

  render() {
    return <dataCorebiz name="kdjf" />;
  }
}
export default dataCorebiz;