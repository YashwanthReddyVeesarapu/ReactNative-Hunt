import {
  Company,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "@/components";
import { COLORS, SIZES, icons } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import { isLoading } from "expo-font";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const tabs = ["About", "Qualifications", "Responsibilities", "Skills"];

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = React.useState(false);

  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const {
    data,
    isLoading,
    error,
    refetch,
  }: {
    data: any;
    isLoading: boolean;
    error: any;
    refetch: () => void;
  } = useFetch(`/job/listings/${params.id}`, {});

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return <Text>About</Text>;
      case "Qualifications":
        return <Text>Qualifications</Text>;
      case "Responsibilities":
        return <Text>Responsibilities</Text>;
      case "Skills":
        return <Text>Skills</Text>;
      default:
        return <Text>About</Text>;
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => {
                router.back();
              }}
            />
          ),

          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => {
                router.back();
              }}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data found</Text>
          ) : (
            <View
              style={{
                padding: SIZES.medium,
                paddingBottom: 100,
              }}
            >
              <Company
                locations={data.locations}
                name={data.company_name}
                title={data.title}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter url={data.url} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
