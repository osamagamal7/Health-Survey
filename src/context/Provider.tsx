import React, {createContext, useCallback, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppContextType, AppData, HealthRangeWithTimestamp} from '../types';

export const AppContext = createContext<AppContextType>({} as AppContextType);

type ContextProviderType = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<ContextProviderType> = ({children}) => {
  const [healthRangeList, setHealthRangeList] = React.useState<
    HealthRangeWithTimestamp[]
  >([]);

  const getAppData = async (): Promise<AppData | null> => {
    try {
      const data = await AsyncStorage.getItem('healthRecord');

      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch {
      return null;
    }
  };

  const setAppData = async (newData: AppData) => {
    try {
      await AsyncStorage.setItem('healthRecord', JSON.stringify(newData));
    } catch {
      return null;
    }
  };

  React.useEffect(() => {
    const getDataFromStorage = async () => {
      const res = await getAppData();

      if (res) {
        setHealthRangeList(res.data);
      }
    };
    getDataFromStorage();
  }, []);

  const handleSelectedRange = (
    sleepQualityRange: number,
    skinQualityRange: number,
  ) => {
    setHealthRangeList(current => {
      const newValue = [
        {sleepQualityRange, skinQualityRange, timestamp: Date.now()},
        ...current,
      ];
      setAppData({data: newValue});
      return newValue;
    });
  };

  const handleDeleteRecord = useCallback((mood: HealthRangeWithTimestamp) => {
    setHealthRangeList(current => {
      const newValue = current.filter(
        item => item.timestamp !== mood.timestamp,
      );
      setAppData({data: newValue});
      return newValue;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{healthRangeList, handleSelectedRange, handleDeleteRecord}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
