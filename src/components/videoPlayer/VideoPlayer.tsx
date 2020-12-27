import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import NativeVideoPlayer from 'react-native-video-controls';

interface VideoPlayerProps {
  style?: ViewStyle;
  title: string;
  source: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 7,
      padding: 10,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      backgroundColor: '#d8d8ff',
      ...props.style,
    },
    titleText: {
      fontWeight: '300',
      fontSize: 20,
    },
    videoContainer: {
      flex: 1,
      alignSelf: 'center',
    },
    videoPlayer: {
      borderRadius: 5,
      marginTop: 5,
      height: 250,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.videoContainer}>
        <NativeVideoPlayer
          style={styles.videoPlayer}
          toggleResizeModeOnFullscreen
          source={{ uri: props.source }}
          resizeMode="cover"
          useNativeControls
          onLoadStart={() => ({
            isNetwork: true,
            type: '',
            uri: props.source,
          })}
          paused
        />
      </View>
    </View>
  );
};

export default VideoPlayer;
