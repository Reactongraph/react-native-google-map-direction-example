import { StyleSheet } from 'react-native';
import Common from '../../common/common';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
