import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { Container, Header, Content } from 'native-base';
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
    content: {
      flexGrow: 1,
    },
    scrollViewContent: {
      paddingHorizontal: 20,
      marginVertical: 15,
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
        <Content style={styles.content}>
          <ScrollView
            alwaysBounceVertical
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollViewContent}>
            <FlatList
              data={listData}
              keyExtractor={(item, index) => `${item.title}_${index}}`}
              renderItem={renderVideoCard}
            />
          </ScrollView>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default App;
