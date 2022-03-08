import * as React from 'react';
import format from 'date-fns/format';
import {TextProps, View, Pressable, StyleSheet} from 'react-native';

import {AppText} from './AppText';
import {HealthRangeWithTimestamp} from '../types';

import {theme} from '../assets';

type HealthItemRecordType = TextProps & {
  item: HealthRangeWithTimestamp;
};

export const HealthItemRecord: React.FC<HealthItemRecordType> = ({item}) => {
  const {handleDeleteRecord} = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <AppText size={18} fontFamily="bold">
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </AppText>
        <Pressable onPress={() => handleDeleteRecord(item)}>
          <AppText style={styles.deleteBtn}>Delete</AppText>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <View>
          <AppText style={styles.txt}>Sleep Range: </AppText>
          <AppText style={styles.score} fontFamily="bold" size={18}>
            {item.sleepQualityRange}
          </AppText>
        </View>
        <View>
          <AppText style={styles.txt}>Skin Range: </AppText>
          <AppText style={styles.score} fontFamily="bold" size={18}>
            {item.skinQualityRange}
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    padding: 10,
    borderRadius: 10,
  },
  deleteBtn: {
    color: 'red',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  score: {
    alignSelf: 'center',
    color: theme.colorBlue,
  },
  txt: {
    marginVertical: 4,
  },
});
