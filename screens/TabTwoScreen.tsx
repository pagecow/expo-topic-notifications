import { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Colors from '../constants/Colors';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [topicNames, setTopicNames] = useState<Array<{ topic_group_names: string }>>([]);

  useEffect(() => {
    axios
      .get('https://app.nativenotify.com/api/all/app/topic/group/names/your-app-id/your-app-token')
      .then(res => {
        console.log(res.data);
        setTopicNames(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleTopicSub = (topicName: string) => {
    axios
      .post('https://app.nativenotify.com/api/post/follower', {
        "masterSubID": topicName,
        "followerSubID": "user-1",
        "appId": your-app-id,
        "appToken": "your-app-token"
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Pick Topics to Follow</Text>
      <View style={styles.flexRow}>
        {topicNames.map((e, i) => {
          return (
            <TouchableOpacity 
              key={i} 
              style={styles.topicCont}
              onPress={() => handleTopicSub(e.topic_group_names)}
            >
              <Text style={styles.text}>
                {e.topic_group_names}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  separator: {
    marginBottom: 30,
    height: 1,
    width: '80%',
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  topicCont: {
    width: '42%',
    alignItems: 'center',
    margin: '4%',
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: Colors.light.tint,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    }, 
    text: {
      color: 'white',
      fontWeight: '900'
    }
});
