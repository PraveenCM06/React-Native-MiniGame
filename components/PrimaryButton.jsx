import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        // styling for both Andriod and IOS, but ripple effect doesnt work here. so adding for both IOS and android
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#590c3a" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    borderRadius: 25,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#7d0640",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    textTransform: "uppercase",
  },
  //ripple effect styling for IOS
  pressed: {
    opacity: 0.75,
  },
});
