import React, {useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native'
import axios from 'axios'

export default function ProductsScreen() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/eventdetails/")
      .then((res) => {
        console.log("getting data", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const BASE_URL = "http://127.0.0.1:8000/";
  return (
    <View>
       {data.map((data) => (
        <View key={data.id}>
          <View>
          <Image source = {{uri:`${BASE_URL}${data.event_banner}`}}
   style = {{ width: 200, height: 200 }}
   />
            <Text>{data.event_name}</Text>
            <Text>{data.start_date}</Text>
          </View>
        </View>
      ))}

    </View>
  )
}
