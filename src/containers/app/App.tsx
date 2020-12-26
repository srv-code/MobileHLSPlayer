import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SectionList,
  FlatList,
} from 'react-native';
import {Container, Header, Content, ListItem} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import {labels} from '../../constants/labels/app';
import {ListItemData} from '../../constants/interfaces/app';
import {listData} from '../../constants/data/app';

const App = () => {
  const styles = StyleSheet.create({
    scrollView: {
      // backgroundColor: 'blue',
      // backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      backgroundColor: 'green',
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

  const renderVideoSection = ({item}: {item: ListItemData}) => (
    <VideoPlayer
      style={{
        marginBottom: 20,
      }}
      title={item.title}
      source={item.videoSource}
    />
  );

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: '#fefefe',
      }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Header
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {labels.appTitle}
          </Text>
        </Header>
        <Content style={{flexGrow: 1}}>
          <ScrollView
            alwaysBounceVertical
            contentInsetAdjustmentBehavior="automatic"
            // style={{ borderWidth: 3, }}
            contentContainerStyle={{paddingHorizontal: 20, marginVertical: 15}}>
            <FlatList
              data={listData}
              keyExtractor={(item, index) => `${item.title}_${index}}`}
              renderItem={renderVideoSection}
            />
          </ScrollView>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default App;
