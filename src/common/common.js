import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = {
  // devcie dementions
  deviceHeight,
  deviceWidth,

  // defines colors
  redColor: '#e81f01',
  whiteColor: '#ffffff',
};
