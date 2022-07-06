import { React, useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import axios from "axios";
// import { Card } from "react-native-elements";

const ProductsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/eventdetails/")
      .then((res) => {
        console.log("getting data", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   Base url for the image
  const BASE_URL = "http://127.0.0.1:8000/";

  return (
    <SafeAreaView>
      <Text>Don</Text>
      {data.map((data) => (
        <View key={data.id}>
          <View>
            <Text>{data.event_name}</Text>
            <img
              style={{ width: "200px" }}
              alt="Banner"
              src={`${BASE_URL}${data.event_banner}`}
            />
            <Text>{data.start_date}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default ProductsScreen