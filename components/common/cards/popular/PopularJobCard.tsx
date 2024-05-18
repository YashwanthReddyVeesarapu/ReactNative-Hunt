import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { dynamicStyles, styles } from "./popularjobcard.style";
import { checkImageUrl } from "@/utils";

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: {
  item: any;
  selectedJob: any;
  handleCardPress: any;
}) => {
  return (
    <TouchableOpacity
      style={dynamicStyles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={dynamicStyles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageUrl(item.company_logo)
              ? item.company_logo
              : "https://via.placeholder.com/150",
          }}
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.company_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={dynamicStyles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text style={styles.location}>
          {item.locations.map((loc: any) => loc).join(", ")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
