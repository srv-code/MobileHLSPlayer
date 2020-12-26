/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const streamLinks = [
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0xe61ae6e851cd9a177525173b112dd4eb59214174/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721146.mp4.m3u8',
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0xbfcfe5519b7ffed2cebda9791d54965ab95ac4cc/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721151.mp4.m3u8',
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0x19afd8635b74b718d8ca8f2e32bfd0484a6df1fd/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721148.mp4.m3u8',
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0x91032b66d79b588fbd76615fc9d39feb4a8e604d/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721147.mp4.m3u8',
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0x557cac769bbdb8331508eba4fae0e3f57fda7c98/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721145.mp4.m3u8',
  'https://videos-fms.jwpsrv.com/0_5fe1a7d5_0x673ae97418cc3069f7a47c21f135c4ce0f27c5e1/content/conversions/LOPLPiDX/videos/IFBsp7yL-24721150.m4a.m3u8',
];

const App = () => {
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text>HLS Stream Player</Text>
          </View>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>HLS Streaming Video</Text>
              <Text style={styles.sectionDescription}>
                This player plays the HLS streaming video.
              </Text>
              <Video
                style={{
                  borderWidth: 1,
                  // flex: 1,
                  height: 200,
                  width: 300,
                }}
                onLoadStart={() => ({
                  isNetwork: true,
                  type: '',
                  uri: streamLinks[0],
                  // 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                })}
                source={{uri: streamLinks[0]}}
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
