import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles, dynamicStyles } from "./screenheader.style";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: {
  iconUrl: any;
  dimension: any;
  handlePress: any;
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={dynamicStyles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
