import { View } from "react-native";
import {Avatar, Button, Card, Text } from "react-native-paper"

const LeftContent = (props) => <Avatar.Icon {...props} icon="biohazard" />;

export default function index(){
    return (
        <View>
            <Card>
                <Card.Title title="John Smith" subtitle="100 - 150" left={LeftContent}/>
            </Card>
        </View>
    );
}