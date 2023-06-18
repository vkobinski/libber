import { View, StyleSheet } from "react-native";
import { Categoria } from "../components/Categoria";
import { Text } from "react-native";

export function Home() {
  const Row = ({ children }) => {
    return <View style={styles.row}>{children}</View>;
  };

  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };

  return (
    <View style={styles.container}>
      <Row>
        <Col numRows={1}>
          <Categoria />
        </Col>
        <Col numRows={1}>
            <Categoria />
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
            <Categoria />
        </Col>
        <Col>
            <Categoria/>
        </Col>
        <Col>
            <Categoria /> 
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 3,
    width: "80%",
    marginHorizontal: "auto",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
  },
  "2col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
  },
  "3col": {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
});
