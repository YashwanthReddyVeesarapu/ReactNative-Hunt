import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageUrl } from "@/utils";
import { icons } from "@/constants";

const Company = ({
  title,
  name,
  locations,
}: {
  title: string;
  name: string;
  locations: string[];
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{name}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>
            {locations.map((loc: any) => loc).join(", ")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
