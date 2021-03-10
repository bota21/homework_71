import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { styles } from "../styles";
import { fetchRedditList } from "../store/actions";

const Main = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRedditList());
  }, [dispatch]);
  console.log(list);
  
  const renderItem = ({item}) => {
    console.log(item.id);
<List key={item.id} title={item.title}/> 
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.flatWrapper}
        data={list}
        renderItem={renderItem}
      />
       <List 
       title="The side of Paris many don't see"
       image="https://b.thumbs.redditmedia.com/A06sqZ7UHxCCrCJyt5y4JCp7qvxxm2nvxZw_vR0xe_U.jpg"
      />

    </View>
  );
};

export default Main;
