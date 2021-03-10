import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles";

const List = ({ image, title }) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default List;
