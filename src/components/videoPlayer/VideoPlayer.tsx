import React, {useState} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  style?: ViewStyle;
  title: string;
  source?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      padding: 10,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      backgroundColor: '#d8d8ff',
      ...props.style,
    },
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '300',
          fontSize: 20,
        }}>
        {props.title}
      </Text>
      <View style={{alignItems: 'center'}}>
        <Video
          style={{
            // borderWidth: 1,
            borderRadius: 5,
            marginTop: 5,
            height: 250,
            width: 320,
          }}
          source={{
            uri: props.source,
            // type: 'm3u8',
          }}
          rate={1.0}
          volume={10}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls={true}
          isLooping
          // style={{ width: 300, height: 300 }}

          onLoadStart={() => ({
            isNetwork: true,
            type: '',
            uri: props.source,
            // 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          })}
          onError={(a) => console.log('onError:', a)}
          onBuffer={() => console.log('onBuffer')}
          onLoad={() => console.log('onLoad')}
          onProgress={() => console.log('onProgress')}
          onSeek={() => console.log('onSeek')}
          onVideoError={() => console.log('onVideoError')}
          // onLoadStart={() => console.log('onLoadStart')}
          onEnd={() => console.log('onEnd')}
          paused={isPaused}
        />
      </View>
    </View>
  );
};

export default VideoPlayer;
