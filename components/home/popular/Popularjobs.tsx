import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { router, useRouter } from "expo-router";

import { SIZES, COLORS } from "@/constants";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";
import { useFetch } from "@/hooks/useFetch";

const Popularjobs = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
  }: {
    data: any;
    isLoading: any;
    error: any;
    refetch: any;
  } = useFetch("/job/listings", {
    page: 1,
  });
  const [selectedJob, setSelectedJob] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={() => {
                  router.push(`/job/${item.id}`);
                  setSelectedJob(item.id);
                }}
              />
            )}
            keyExtractor={(item: any) => `${item.id}`}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
