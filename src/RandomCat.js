import React, { Component } from "react";
class RandomCat extends React.Component {
  constructor(props) {
    super(props);
  }

  // Now the image url is passed in this component doesn't need state or fetch and loads the image jsut liek a normal image

  render() {
    const { catImageUrl } = this.props;
    if (!catImageUrl) return <p>Oops, something went wrong!</p>;
    return <img src={catImageUrl} className="cat" alt="random cat photo" />;
  }
}
export default RandomCat;
