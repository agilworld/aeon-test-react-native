import { View, type ViewProps, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Menu } from './Menu';
import { Search } from './Search';
import { isDesktop, isMobileResponsiveness, isMobile } from '@/utils/userAgent';

export type HeaderProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Header({ lightColor, darkColor, ...otherProps }: HeaderProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const borderBottomColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
  
  return (
    <View style={[{ backgroundColor, borderBottomColor, borderBottomWidth:1 }, styles.container]} {...otherProps} >
      <View style={styles.containerInner}>
        <ThemedText type="default" style={styles.brandText} lightColor='#222'>AEON</ThemedText>
        {isDesktop && <Menu />}
      </View>
      {isDesktop && <Search />}
      {(isMobileResponsiveness || isMobile) && <View style={styles.containerInner}>
        <Search />
        <Menu />
      </View>}
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    height:60,
    width:"100%",
    alignItems:"center",
    paddingVertical:20,
    paddingHorizontal:20,
    zIndex:100
  },
  containerInner:{
    flexDirection:"row",
    alignItems:"center",
  },
  brandText:{
    borderWidth:2,
    borderColor:'#222',
    paddingHorizontal:4
  }
});

