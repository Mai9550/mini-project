import React, { Component } from "react";
import RandomCat from "./RandomCat.js";
import QR from "./QR.js";
import Form from "./form.js";

class BooksApp extends Component {
 
  
  state = {
    showCatImage: false,
    showQrCode: false,
    catImageUrl: "",
    qrUrl: ""
};

handleFetchRandomImage = () => {
    fetch("https://aws.random.cat/meow")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          catImageUrl: data.file,
          showCatImage: true,
          qrUrl: `https://qrtag.net/api/qr_12.svg?url=${data.file}` 
        });
      })
      .catch((error) => console.log(error));
  };

 handleShowQrCode = () => {
    this.setState({ showQrCode: true });
  };



  render() {
    const { showCatImage, showQrCode, catImageUrl, qrUrl } = this.state;

    return (
      <div className="app">
        <div className="first">
          
          {showCatImage && <RandomCat catImageUrl={catImageUrl} />}

          <button className="catButton" onClick={this.handleFetchRandomImage}>
            Generate Cat
          </button>
        </div>
        <div className="second">
          {showQrCode && <QR catImageUrl={catImageUrl} qrUrl={qrUrl}/>}

          <button className="QRButton" onClick={this.handleShowQrCode}>
            Geanerate QR
          </button>

        </div>
      <div>
        <Form qrUrl={qrUrl}/>
      </div>
      </div>
    );
  }
}


export default BooksApp;