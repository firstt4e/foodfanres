import React , { useEffect, useState }from 'react';
import { View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
// import {data} from '../model/data';
import CardRes from '../components/CardRes';

const CardListScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <CardRes 
                itemData={item}
                onPress={()=> navigation.navigate('Menu', {itemData: item})}
            />
        );
    };

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('http:fooddelivery459.herokuapp.com/order/orderAll/')//
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
      return (
        <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        )}
      </View>
    );
  };
  
  export default CardListScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
  });