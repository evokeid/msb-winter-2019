import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: colors.brand,
    marginTop: 30
  },
  name: {
    alignSelf: "center",
    fontFamily: fonts.primaryBold,
    fontSize: fonts.lg,
    marginBottom: 20
  },
  emailContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "70%",
    marginLeft: 20
  },
  heading: {
    fontFamily: fonts.primarySemi,
    fontSize: fonts.xs
  },
  userEmail: {
    fontSize: fonts.xs
  },
  userEmailContainer: {
    borderBottomWidth: 2,
    borderColor: colors.neutralLight,
    width: "100%"
  },
  divider: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "85%",
    marginLeft: 20,
    marginTop: 20,
    borderBottomColor: colors.neutralLight,
    borderBottomWidth: 2
  },
  toggleContainer: {
    marginLeft: 20,
    marginTop: 10,
    borderBottomColor: colors.neutralLight,
    borderBottomWidth: 2
  }
});

export default styles;
