import React from 'react';
import { View,
         StyleSheet,
         Image,
       } from 'react-native';
import { Text } from 'react-native';


export class ActivityFeedItem extends React.Component {
  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.imageTagContainer}>
        <Image
          source={{uri: this.props.profileImg}}
          style={styles.profileImage}
        />
        <Text style={styles.notifText}>
            <Text style={styles.usernameHighlight}>
              {`${this.props.username} ${actionDict[this.props.action]}` +
              `${this.props.voteOption ? `${this.props.voteOption} on: ` : ': '}`}
            </Text>
          {this.props.poll}</Text>
      </View>
    </View> );
  }
}

const actionDict = {
  POST: "asked",
  VOTE: "voted",
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomColor: "#ccced1",
    borderBottomWidth: 1,
  },
  imageTagContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 15,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius:15,
    resizeMode: 'contain',
    marginTop: 3,
  },
  usernameHighlight: {
    fontWeight: 'bold',
    color: '#de6df2',
  },
  notifText: {
    marginRight: 20,
  },
});