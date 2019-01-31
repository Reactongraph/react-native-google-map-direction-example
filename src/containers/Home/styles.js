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
  buttonWrapper: {
    flexDirection: 'row',
    width: Common.deviceWidth,
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  buttonView: {
    borderWidth: 1,
    borderColor: Common.blackColor,
    padding: 10,
  },
});
