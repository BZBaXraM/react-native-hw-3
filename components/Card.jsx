import {Text, View, StyleSheet} from "react-native";


const data = [
    {
        id: 1,
        title: "title1",
        description: "description1",
        price: 19.99,
    },
    {
        id: 2,
        title: "title2",
        description: "description2",
        price: 19.99,
    }
];
const Card = () => {
    const {title, description, price} = data[0];
    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap"}}>
                <Text style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {description}
                </Text>
                ${price}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    text: {
        fontSize: 20
    },
    box: {
        width: 110,
        height: 110,
        backgroundColor: "#bfbfbf",
        borderRadius: 8,
    },
});


export default Card;
