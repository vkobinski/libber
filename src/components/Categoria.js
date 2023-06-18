import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { TouchableHighlight } from "react-native";

export function Categoria() {

    const icon = require("../../assets/favicon.png");

  return (
    <TouchableOpacity style={styles.quadrado}>
      <View style={styles.container}>
        <Image style={styles.imagem} source={icon}/>
        <Text style={styles.texto}>Redes Sociais</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    quadrado: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: "#0079F6",
        justifyContent: "center",
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    imagem: {  
        width: 50,
        height: 50,
    },
    texto: {
        color: "white",
    }
});
