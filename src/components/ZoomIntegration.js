import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking, Alert } from 'react-native';

export const joinZoomMeeting = (zoomLink) => {
  if (!zoomLink) {
    Alert.alert('Error', 'Invalid Zoom meeting link');
    return;
  }
  
  Linking.canOpenURL(zoomLink)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(zoomLink);
      } else {
        Alert.alert(
          'Zoom Not Installed',
          'The Zoom app is not installed. Would you like to download it?',
          [
            { 
              text: 'Cancel', 
              style: 'cancel' 
            },
            { 
              text: 'Download', 
              onPress: () => Linking.openURL('https://zoom.us/download') 
            }
          ]
        );
      }
    })
    .catch((err) => console.error('Error opening Zoom:', err));
};

const ZoomMeetingComponent = ({ link, meetingName = "Class" }) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => joinZoomMeeting(link)}
    >
      <Text style={styles.buttonText}>Join {meetingName} on Zoom</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0E71EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }
});

export default ZoomMeetingComponent;