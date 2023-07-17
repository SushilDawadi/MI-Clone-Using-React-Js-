import React, { Fragment } from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StartProduct.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import NavOption from "./components/NavOption";

const App = () => {
  return (
    <Router>
      <Fragment>
        <PreNavbar />
        <Navbar />
        <NavOption
          miPhones={data.miPhones}
          redmiPhones={data.redmiPhones}
          tv={data.tv}
          laptop={data.laptop}
          fitnessAndLifeStyle={data.fitnessAndLifeStyle}
          home={data.home}
          audio={data.audio}
          accessories={data.accessories}
        />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Routes>
          <Route
            exact
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          ></Route>
          <Route
            exact
            path="/smartDevice"
            element={
              <HotAccessories
                smartDevice={data.hotAccessories.smartDevice}
                smartDeviceCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          ></Route>
          <Route
            exact
            path="/lifeStyle"
            element={
              <HotAccessories
                lifeStyle={data.hotAccessories.lifeStyle}
                lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          ></Route>
          <Route
            exact
            path="/mobileAccessories"
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          ></Route>
        </Routes>
      </Fragment>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
};

export default App;
