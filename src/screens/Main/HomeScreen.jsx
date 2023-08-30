import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React, { useEffect } from 'react';
import globalStyles from '../../styles/globalStyles';
import { BackHandler } from 'react-native';
import { ScrollView } from 'react-native';
import data from '../../mockWeather.json';
import { COLORS } from '../../constants';
import { FontAwesome5 } from '@expo/vector-icons';
import Weather from '../../components/HomeScreenComponents/Weather';
import News from '../../components/HomeScreenComponents/News';

const news = [
  {
    id:1,
    title: 'Hydroponic Broccoli - Seed to Harvest Trialsaaa',
    discription:
      'The aaa research and development team is always on the lookout to try various crops that have yet to be grown in a hydroponic Tower. It was a first for our grow team to trial broccoli in the ZipFarm, so we removed all expectations.',
  },
  {
    id:2,
    title: 'Hydroponic Broccoli - Seed to Harvest Trialsbbb',
    discription:
      'The bbb research and development team is always on the lookout to try various crops that have yet to be grown in a hydroponic Tower. It was a first for our grow team to trial broccoli in the ZipFarm, so we removed all expectations.',
  },
  {
    id:3,
    title: 'Hydroponic Broccoli - Seed to Harvest Trialsccc',
    discription:
      'The ccc research and development team is always on the lookout to try various crops that have yet to be grown in a hydroponic Tower. It was a first for our grow team to trial broccoli in the ZipFarm, so we removed all expectations.',
  },
];

const tipOfTheDayMock =
  'Regularly check and trim plant roots to prevent long roots that can clog the system.';

const HomeScreen = () => {
  useEffect(() => {
    //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //     // Perform your custom action here
    //     // Return `true` to indicate that you've handled the back press and prevent default behavior
    //     // Return `false` to allow the default back behavior
    //     return true;
    //   });
    //   return () => backHandler.remove();
  }, []);

  return (
  
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.tabScrollView}>
        {/* Hi user */}
        <View style={styles.dataDiv}>
          <View style={styles.helloTitleDiv}>
            <Text style={styles.helloTitle}>Good morning,User!</Text>
          </View>
        </View>


        {/* Weather */}
        <View style={styles.dataDiv}>
          <View style={styles.weatherDiv}>
            <View style={styles.currentTempDiv}>
              <Text style={styles.currentTempStyle}>
                {data.current.temp_c}°C
              </Text>
              <Text style={styles.currentTempStyle}>
                {data.current.condition.text}
              </Text>
              <Image
                source={{
                  uri: `https:${data.current.condition.icon}`,
                }}
                style={{
                  height: 54,
                  width: 54,
                }}
              />
            </View>
            <FlatList
              style={styles.flatListStyle}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data.forecast.forecastday}
              renderItem={({ item }) => {
                return <Weather item={item} />;
              }}
            />
          </View>
        </View>

        {/* Tip */}
        <View style={styles.dataDiv}>
          <View style={styles.tipDiv}>
            <View style={styles.tipConntentDiv}>
              <FontAwesome5 name="lightbulb" size={44} color={COLORS.bgColor} />
              <Text style={{ fontSize: 25, color: COLORS.bgColor }}>
                Tip of the day!
              </Text>
            </View>
            <Text style={styles.tipText}>{tipOfTheDayMock}</Text>
          </View>
        </View>
<View style={{borderBottomColor:'black',borderBottomWidth:1,marginTop:20,flex:1,alignItems:'center'}}>

<Text style={{fontSize:35}}>News</Text>
</View>
        {/* News */}
        <View style={styles.dataDiv}>
          <FlatList
            style={styles.flatListStyle}
            scrollEnabled={false}
            data={news}
            keyExtractor={i=>i.id}
            renderItem={({ item }) => {
              return <News item={item} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  helloTitleDiv: {
    width: 335,
    height: 50,
  },
  helloTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Merriweather',
  },
  weatherDiv: {
    backgroundColor: COLORS.lightBrown,
    borderRadius: 25,
    height: 230,
  },
  dataDiv: {
    marginTop: 15,
    width: 335,
   

    alignItems: 'center',
  },
  tipDiv: {
    width: 335,
    backgroundColor: COLORS.lightBrown,
    borderRadius: 25,
  },
  tipText: {
    textAlign: 'center',
    paddingBottom: 25,
    padding: 25,
    fontSize: 20,
  },
  flatListStyle: {
    padding: 10,
  },
  currentTempDiv: {
    display: 'flex',
    backgroundColor: COLORS.darkColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  currentTempStyle: { fontSize: 28, padding: 10, color: COLORS.bgColor },
  tipConntentDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: COLORS.darkColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
