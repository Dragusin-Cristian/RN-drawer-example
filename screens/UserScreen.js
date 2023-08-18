import { View, Text, Button, StyleSheet } from 'react-native';

//* navigation comes from the drawer navigation
function UserScreen({navigation}) {

  const openDrawerHandler = () => {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open drawer' onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
