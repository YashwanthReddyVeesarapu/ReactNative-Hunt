import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

type Job = {
  id: string;
};

// Static styles
const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
    borderRadius: SIZES.small,
  } as ImageStyle,
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  } as TextStyle,
  infoContainer: {
    marginTop: SIZES.large,
  } as ViewStyle,
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  } as TextStyle,
});

// Dynamic styles
const dynamicStyles = {
  container: (selectedJob: string, item: Job): ViewStyle => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, item: Job): ViewStyle => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  jobName: (selectedJob: string, item: Job): TextStyle => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.id ? COLORS.white : COLORS.primary,
  }),
  publisher: (selectedJob: string, item: Job): TextStyle => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.id ? COLORS.white : COLORS.primary,
  }),
};

export { styles, dynamicStyles };
