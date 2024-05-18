import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { styles, dynamicStyles } from "./welcome.style";
import { useRouter } from "expo-router";
import { images, icons, SIZES } from "@/constants";

const jobTypes = ["Full Time", "Part Time", "Contract"];

const Welcome = ({
  searchTerm,
  setSearchTerm,
  handlePress,
}: {
  searchTerm: string;
  setSearchTerm: any;
  handlePress: any;
}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for jobs"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={dynamicStyles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={dynamicStyles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `${item}`}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
