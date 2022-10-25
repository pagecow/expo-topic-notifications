import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { registerIndieID } from 'native-notify';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import { RootTabScreenProps } from '../types';

export default function EditScreenInfo({ navigation }: RootTabScreenProps<'TabOne'>) {
  const handleLogin = () => {
    registerIndieID('user-1', your-app-id, 'your-app-token');
    navigation.navigate('TabTwo');
  }

  return (
    <View>
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={() => handleLogin()} style={styles.helpLink}>
          <Text style={styles.helpLinkText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: Colors.light.tint,
    borderRadius: 6
  },
  helpLinkText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },
});
