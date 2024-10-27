import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import {Avatar, Button, Card, Text } from "react-native-paper"

const LeftContent = props => <Avatar.Icon {...props} icon="biohazard" />;
const GameSelected = () => {

}

export default function index(){
    return (
        <View>
            <View>
                <Text style={styles.heading}>Your Move</Text>
            </View>

            <Link className="card" href="/game" asChild>
                <Card onPress={GameSelected}>                
                    <Card.Title title="John Smith" subtitle="100 - 150">
                    </Card.Title>
                </Card>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        width: 320,
        height: 30,
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 3,
        fontSize: 20,
    },
});