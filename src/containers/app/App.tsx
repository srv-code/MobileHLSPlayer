import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { Container, Header } from 'native-base';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import { labels } from '../../constants/labels/app';
import { ListItemData } from '../../constants/interfaces/app';
import { listData } from '../../constants/data/app';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fefefe',
    },
    safeAreaView: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    list: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    videoCard: {
      marginBottom: 20,
    },
  });

  const renderVideoCard = ({ item }: { item: ListItemData }) => (
    <VideoPlayer
      style={styles.videoCard}
      title={item.title}
      source={item.videoSource}
    />
  );

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <Header style={styles.header}>
          <Text style={styles.headerText}>{labels.appTitle}</Text>
        </Header>
        <FlatList
          style={styles.list}
          data={listData}
          keyExtractor={(item, index) => `${item.title}_${index}}`}
          renderItem={renderVideoCard}
        />
      </SafeAreaView>
    </Container>
  );
};

export default App;
