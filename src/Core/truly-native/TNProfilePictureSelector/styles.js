import {
  Dimensions
} from 'react-native';
import {
  StyleSheet
} from 'react-native';

const {
  height
} = Dimensions.get('window');
const imageSize = height * 0.30;
const imageSizeWidth = imageSize * 1;
const imageSizeHeight = imageSize * 1.3;



const photoIconSize = imageSize * 0.25;

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
    },
    imageBlock: {
      flex: 2,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    imageContainer: {
      height: imageSizeHeight,
      width: imageSizeWidth,
      borderColor: appStyles.colorSet[colorScheme].grey3,
      borderWidth: 1,
      borderRadius: imageSize / 20,
      shadowColor: '#006',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      overflow: 'hidden',
    },

    addButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d6d6d6',
      opacity: 0.8,
      zIndex: 2,
      marginTop: imageSizeHeight * 0.75,
      marginLeft: -imageSize * 0.28,
      width: photoIconSize,
      height: photoIconSize,
      borderRadius: photoIconSize,
    },
    closeButton: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginRight: 15,
      backgroundColor: appStyles.colorSet[colorScheme].grey6,
      width: 28,
      height: 28,
      borderRadius: 20,
      overflow: 'hidden',
    },
    closeIcon: {
      width: 27,
      height: 27,
    },
  });
};

export default dynamicStyles;