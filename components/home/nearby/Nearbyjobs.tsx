import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./nearbyjobs.style";
import { router, useRouter } from "expo-router";

import { SIZES, COLORS } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import NearbyJobCard from "@/components/common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, isLoading, error, refetch } = useFetch("/job/listings", {
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map((job: any) => (
            <NearbyJobCard
              key={job.id}
              job={job}
              selectedJob={data[0]}
              handleCardPress={() => {
                router.push(`/job/${job.id}`);
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
