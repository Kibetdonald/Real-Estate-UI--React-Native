// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Button,
//   Text,
//   Image,
//   ScrollView,
//   Pressable,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import COLORS from "../const/colors";

// export default function ChallengeOne() {
//   return (
//     <ScrollView>
//       <View style={style.container}>
//         <Icon name="list" size={18} />
//         <Icon name="notifications" size={28} />
//       </View>
//       <Text>Hello, James!</Text>
//       <Text>What do you wanna learn today?</Text>
//       <View style={style.card}>
//         <View>
//           <Text>7 Days Free Trial</Text>
//           <Text>
//             Lorem ipsum dolor amet consecteteur adipiscing elit enean commodo
//           </Text>
//           <Pressable style={style.button} onPress={onPress}>
//             <Text style={style.texts}>Join</Text>
//           </Pressable>
//         </View>
//         <View>
//           <Image
//             style={style.profileImage}
//             source={require("../assets/profile.png")}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     flexDirection: "row",
//     display: "flex",
//     backgroundColor: "#ffffff",
//     justifyContent: "space-between",
//   },
//   title: {
//     fontSize: 12,
//     color: "#000",
//   },
//   card: {
//     width: 250,
//     marginLeft: "50",
//     backgroundColor: COLORS.grey,
//     borderRadius: 10,
//     flexDirection: "row",
//     marginTop: "40",
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: "black",
//   },
//   texts: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
// });
