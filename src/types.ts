export type HealthRangeWithTimestamp = {
  sleepQualityRange: number;
  skinQualityRange: number;
  timestamp: number;
};

export type AppData = {
  data: HealthRangeWithTimestamp[];
};

export type AppContextType = {
  healthRangeList: AppData['data'];
  handleSelectedRange: (
    sleepQualityRange: number,
    skinQualityRange: number,
  ) => void;
  handleDeleteRecord: (record: HealthRangeWithTimestamp) => void;
};

//Navigation Types
export type MainBottomTabParamList = {
  Home: undefined;
  History: undefined;
};
