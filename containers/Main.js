import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { styles } from "../styles";
import { fetchRedditList } from "../store/actions";

const Main = () => {
  const list = useSelector((state) => state.list);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedditList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatWrapper}
        data={list}
        renderItem={(item) => (
          <List title={item.item.title} image={item.item.image} />
        )}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.spinner}
          size='large'
          color='#0000ff'
        />
      ) : null}
    </View>
  );
};

export default Main;
