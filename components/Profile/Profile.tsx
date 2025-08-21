import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },  
    
    image: {
        borderRadius: 999,
        width: 150,
        height: 150
    }, 

    primaryText: {
        fontSize: 25,
        textAlign: "center",
    },

    secondaryText: {
        fontSize: 16,
        textAlign: "center",
    }
})

export default function Profile({ imageSource, name, bio }: { imageSource: ImageSourcePropType, name: string, bio: string }) {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.primaryText}>{name}</Text>
            <Text style={styles.secondaryText}>{bio}</Text>
        </View>
    );
}