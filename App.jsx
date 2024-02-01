import {StyleSheet, View} from 'react-native';
import MainPage from "./components/MainPage";

const App = () => {
    return (
        <View style={styles.container}>
            <MainPage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#bfbfbf",
    },
});

export default App;