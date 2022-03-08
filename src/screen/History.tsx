import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import {HealthItemRecord} from '../components/HealthItemRecord';

export const History: React.FC = () => {
  const healthRangeList = [];

  return (
    <Screen>
      {healthRangeList.length === 0 ? (
        <View style={styles.emptyListContainer}>
          <AppText style={styles.emptyText} size={17}>
            There Is No History To Show, Please Start Filling Out The Form In
            The Home Page!
          </AppText>
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {healthRangeList.map(item => (
            <View style={styles.healthItemContainer}>
              <HealthItemRecord item={item} />
            </View>
          ))}
        </ScrollView>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    justifyContent: 'flex-end',
    flex: 0.5,
  },
  emptyText: {
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  healthItemContainer: {
    marginVertical: 5,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});
