import * as React from "react";

const Component = () => {
  return (
    <Image
      style={styles.component1Icon}
      contentFit="cover"
      source={require("../assets/component-13.png")}
    />
  );
};

const styles = StyleSheet.create({
  component1Icon: {
    width: 35,
    height: 39,
  },
});

export default Component;
