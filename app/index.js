
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page() {
  const navigation = useNavigation();

  const handleTilePress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage} resizeMode="contain">
      <View style={styles.container}>
        <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Status Summary:</Text>

        <View style={styles.headingTile}>
          <Text style={styles.headingText}>Ahead & Parked: 7</Text>
          <Text style={styles.headingText}>Ahead & Moving: 2</Text>
          <Text style={styles.headingText}>Delayed & Parked: 2</Text>
        </View>
        
        <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Number:</Text>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>RJ14GN5363</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>NL01AAF3841</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>NL01AF3844</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>HR55AK1223</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>RJ14GP8417</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  summaryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headingTile: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
    width: '80%',
    maxWidth: 400,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  tile: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
    width: '80%',
    maxWidth: 400,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});



// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';

// export default function Page() {
//   return (
//     <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage} resizeMode="contain">
//       <View style={styles.container}>
//         <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Status Summary:</Text>

//         <View style={styles.headingTile}>
//           <Text style={styles.headingText}>Ahead & Parked: 7</Text>
//           <Text style={styles.headingText}>Ahead & Moving: 2</Text>
//           <Text style={styles.headingText}>Delayed & Parked: 2</Text>
//         </View>
//         <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Number:</Text>
//         <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
//           <Text style={styles.tileText}>RJ14GN5363</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
//           <Text style={styles.tileText}>NL01AAF3841</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
//           <Text style={styles.tileText}>NL01AF3844</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
//           <Text style={styles.tileText}>HR55AK1223</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
//           <Text style={styles.tileText}>RJ14GP8417</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'contain',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   summaryHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   headingTile: {
//     backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
//     width: '80%',
//     maxWidth: 400,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     marginBottom: 20,
//     borderRadius: 8,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headingText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   tile: {
//     backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
//     width: '80%',
//     maxWidth: 400,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   tileText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });




// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headingTile}>
//         <Text style={styles.headingText}>Ahead-Parked: 7</Text>
//         <Text style={styles.headingText}>Ahead-Moving: 2</Text>
//         <Text style={styles.headingText}>Delayed-Parked: 2</Text>
//       </View>

//       <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page1')}>
//         <Text style={styles.tileText}>RJ14GN5363</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page2')}>
//         <Text style={styles.tileText}>NL01AAF3841</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page3')}>
//         <Text style={styles.tileText}>NL01AF3844</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page4')}>
//         <Text style={styles.tileText}>HR55AK1223</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page5')}>
//         <Text style={styles.tileText}>RJ14GP8417</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   headingTile: {
//     backgroundColor: '#808080',
//     width: '80%',
//     maxWidth: 400,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     marginBottom: 20,
//     borderRadius: 8,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headingText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#FC6D26',
//   },
//   tile: {
//     backgroundColor: '#808080',
//     width: '80%',
//     maxWidth: 400,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   tileText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FC6D26',
//   },
// });


// import React, { useEffect, useState } from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';

// export default function Page() {
//   const [aheadAndParkedCount, setAheadAndParkedCount] = useState(0);
//   const [aheadAndMovingCount, setAheadAndMovingCount] = useState(0);
//   const [delayAndParkedCount, setDelayAndParkedCount] = useState(0);
//   const [trucks, setTrucks] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         'http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL'
//       )
//       .then((response) => {
//         const data = JSON.parse(response.data);
//         console.log('Length of tripList array:', data.tripList.length);
        
        
//         let aheadAndParkedCount = 0;
//         let aheadAndMovingCount = 0;
//         let delayAndParkedCount = 0;

//         data.tripList.forEach((truck) => {
//           if (truck.truckSts === 'Ahead & Parked') {
//             aheadAndParkedCount++;
//           } else if (truck.truckSts === 'Ahead & Moving') {
//             aheadAndMovingCount++;
//           } else if (truck.truckSts === 'Delay & Parked') {
//             delayAndParkedCount++;
//           }
//         });
        
//         setAheadAndParkedCount(aheadAndParkedCount);
//         setAheadAndMovingCount(aheadAndMovingCount);
//         setDelayAndParkedCount(delayAndParkedCount);
//         setTrucks(data.tripList);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   useEffect(() => {
//     console.log(`Ahead & Parked: ${aheadAndParkedCount}`);
//     console.log(`Ahead & Moving: ${aheadAndMovingCount}`);
//     console.log(`Delay & Parked: ${delayAndParkedCount}`);
//   }, [aheadAndParkedCount, aheadAndMovingCount, delayAndParkedCount]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.headingContainer}>
//         <Text style={styles.heading}>Ahead & Parked: {aheadAndParkedCount}</Text>
//         <Text style={styles.heading}>Ahead & Moving: {aheadAndMovingCount}</Text>
//         <Text style={styles.heading}>Delay & Parked: {delayAndParkedCount}</Text>
//       </View>
      

//       <View style={styles.tilesContainer}>
//       {trucks.length > 0 && (
//           <>
//         <View style={styles.tile}>
//           <TouchableOpacity onPress={() => handleTilePress('Page1')}>
//             <Text style={styles.tileText}>{trucks[0]?.truckNo}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.tile}>
//           <TouchableOpacity onPress={() => handleTilePress('Page2')}>
//             <Text style={styles.tileText}>{trucks[1]?.truckNo}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.tile}>
//           <TouchableOpacity onPress={() => handleTilePress('Page3')}>
//             <Text style={styles.tileText}>{trucks[2]?.truckNo}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.tile}>
//           <TouchableOpacity onPress={() => handleTilePress('Page4')}>
//             <Text style={styles.tileText}>{trucks[3]?.truckNo}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.tile}>
//           <TouchableOpacity onPress={() => handleTilePress('Page5')}>
//             <Text style={styles.tileText}>{trucks[4]?.truckNo}</Text>
//           </TouchableOpacity>
//         </View>
//         </>
//         )}

//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     marginBottom: 16,
//   },
//   heading: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     marginTop: 20,
//     marginBottom: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   tile: {
//     backgroundColor: '#e3e3e3',
//     width: 200,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   tileText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



      {/* <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page1')}>
        <Text style={styles.tileText}>RJ14GN5363</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page2')}>
        <Text style={styles.tileText}>NL01AAF3841</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page3')}>
        <Text style={styles.tileText}>NL01AF3844</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page4')}>
        <Text style={styles.tileText}>HR55AK1223</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('Page5')}>
        <Text style={styles.tileText}>RJ14GP8417</Text>
      </TouchableOpacity> */}