import React from "react";

import { ScrollView, Image } from "react-native";

const ImageSlide = () => {
  return (
    <ScrollView
      pagingEnabled
      horizontal
    >
      <Image source={require("../assets/trailer.jpg")} resizeMode="cover" 
       resizeMode = 'cover'
      />
      <Image source={require("../assets/trailer2.jpg")} resizeMode="cover"
       resizeMode = 'cover'
      />
    </ScrollView>
  );
};

export default ImageSlide;
