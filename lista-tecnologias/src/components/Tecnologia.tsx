import { View, Text } from "react-native";

type Props = {
  nome: string;
};

export default function Tecnologia({ nome }: Props) {
  return (
    <View
      style={{
        backgroundColor:"#1e1e1e",
        padding:20,
        margin:10,
        borderRadius:10
      }}
    >
      <Text
        style={{
          color:"white",
          fontSize:20
        }}
      >
        {nome}
      </Text>
    </View>
  );
}