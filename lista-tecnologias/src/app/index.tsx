import { ScrollView, View } from "react-native";
import Tecnologia from "../components/Tecnologia";

export default function Home() {

  const tecnologias = [
    "React",
    "JavaScript",
    "Python",
    "TypeScript",
    "Java",
    "C",
    "HTML",
    "CSS"
  ];

  return (
    <ScrollView
      style={{
        flex:1,
        backgroundColor:"black"
      }}
    >

      <View
        style={{
          marginTop:50
        }}
      >

        {tecnologias.map((item,index)=>(

          <Tecnologia
            key={index}
            nome={item}
          />

        ))}

      </View>

    </ScrollView>
  );
}