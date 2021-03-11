import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 50
  },
  wrapper: {
    width: "100%",
    padding: 5,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  text: {
    width: "80%",
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
  }
});
