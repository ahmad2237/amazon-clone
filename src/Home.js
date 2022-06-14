import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div classNa me="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
          alt="homeimage"
        />

        <div className="home__row">
          <Product
            id="12345678"
            title="the lean startup"
            price="29.99"
            image="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UL640_QL65_.jpg"
            rating={5}
          />
          <Product
            id="12345679"
            title="Amazon Essentials Men's Regular-Fit Short-Sleeve Pocket Oxford Shirt with shoes"
            price="70.00"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345681"
            title="Corsair Virtuoso RGB Wireless Gaming Headset - High-Fidelity 7.1 Surround Sound w/Broadcast Quality Microphone - Memory Foam Earcups - 20 Hour Battery Life - Works"
            price="170.00"
            image="https://m.media-amazon.com/images/I/716vTg39ddL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="12345681"
            title="SUUNTO 9 Baro: Premium GPS Running, Cycling, Adventure"
            price="170.00"
            image="https://m.media-amazon.com/images/I/61PK1r9jWLL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="12345681"
            title="Polar Grit X - Rugged Multisport GPS Smart Watch "
            price="270.00"
            image="https://m.media-amazon.com/images/I/616cM2g-y5L._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345680"
            title="Samsonite Classic Leather Backpack, Cognac, One Size"
            price="200.00"
            image="https://m.media-amazon.com/images/I/91nYgA8pGrL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
