import { StyleSheet } from 'react-native';
import {
  container,
  center,
  margin,
  colors,
  contain,
  body2,
  fonts,
  padding
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    backgroundColor: colors.black
  },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  onboardWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 6
  },
  logoWrapper: { ...center },
  imgLogo: { ...contain },
  welcomeWrapper: { ...center },
  welcome: { ...body2, color: colors.white },
  slide: { ...container },
  dot: { backgroundColor: colors.white },
  activeDot: { backgroundColor: colors.brand },
  btn: {
    backgroundColor: colors.brand,
    borderRadius: 5,
    marginHorizontal: margin.xl
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: 'OpenSans-Bold'
  },
  button: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.md,
    fontFamily: 'OpenSans-Bold',
    backgroundColor: colors.brand,
    marginHorizontal: margin.xl,
    paddingVertical: padding.xs,
    paddingHorizontal: padding.lg
  }
});

export default styles;
