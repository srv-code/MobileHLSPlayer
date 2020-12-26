import React from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  style?: ViewStyle;
  source?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      ...props.style,
    },
  });

  return (
    <View style={styles.container}>
      {/* // TODO add a placeholder for empty source */}
      <Video
        style={{
          borderWidth: 1,
          height: 200,
          width: 300,
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
        paused={false}
      />
    </View>
  );
};

export default VideoPlayer;
