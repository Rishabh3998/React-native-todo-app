import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 10,
  },
  goalList: {
    flex: 4,
    marginTop: 10,
  },
});
