import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { staticStyles, dynamicStyles } from "./tabs.style";
import { SIZES } from "@/constants";

const TabButton = ({
  name,
  activeTab,
  onHandleSearchType,
}: {
  name: string;
  activeTab: string;
  onHandleSearchType: any;
}) => {
  return (
    <TouchableOpacity
      style={dynamicStyles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={dynamicStyles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: string;
  setActiveTab: any;
}) => {
  return (
    <View style={staticStyles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }: { item: any }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        keyExtractor={(item: any) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
        }}
      />
    </View>
  );
};

export default Tabs;
