import Profile from "@/components/Profile/Profile";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    padding: 20,
    alignItems: "center",
    gap: 20
  },

  title: {
    textAlign: "center",
    fontSize: 24,
  }
})

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}> App criado para a disciplina Programação para Dispositivos Móveis </Text>
      <Profile 
        imageSource={require("@/assets/images/image.png")} 
        name = "Arthur Levy"
        bio = "Me chamo Arthur Levy, sou formado em Desenvolvimento de Sistemas pela Escola Técnica Estadual Ginásio Permanbucano. Atualmente, graduando em Sistemas para Internet e Engenharia da Computação na Universidade Católica de Pernambuco e na Universidade de Pernambuco."
      />
    </View>
  );
}
