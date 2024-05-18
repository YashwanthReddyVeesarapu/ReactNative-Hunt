import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageUrl } from "@/utils";

const NearbyJobCard = ({
  job,
  selectedJob,
  handleCardPress,
}: {
  job: any;
  selectedJob: any;
  handleCardPress: any;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(job.company_logo)
              ? job.company_logo
              : "https://via.placeholder.com/150",
          }}
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.title}
        </Text>
        <Text style={styles.textContainer}>
          {job.locations.map((loc: any) => loc).join(", ")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
