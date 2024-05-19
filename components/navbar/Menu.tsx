import { View, type ViewProps, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Link } from 'expo-router';
import { isMobileResponsiveness, isDesktop, isMobile } from '@/utils/userAgent';
import Animated, { useSharedValue, useAnimatedStyle, LightSpeedInRight, LightSpeedOutLeft, withTiming } from 'react-native-reanimated';
import { useCallback, useState } from 'react';
import { useDimension } from '@/hooks/useDimension';

export type MenuProps = ViewProps

export const ListMenu = [
  {name:"Showcase", link:"/showcase"},
  {name:"Docs", link:"/docs"},
  {name:"Blog", link:"/blog"},
  {name:"Analytics", link:"/analytics"},
  {name:"Templates", link:"/templates"},
  {name:"Enterprise", link:"/enterprise"},
]
export function Menu(_props: MenuProps) {
  const [show, setShow] = useState<boolean>()
  const { screenHeight, screenWidth} = useDimension()
  const op = useSharedValue<number>(0)

  const animatedShow = useAnimatedStyle(() => {
    return {
      display:show ? "none" : "flex",
      zIndex:2
    }
  })

  const animatedClose = useAnimatedStyle(() => {
    return {
      display:show ? "flex" : "none",
      zIndex:3
    }
  })

  const animatedMenu = useAnimatedStyle(() => {
    return {
      display: show ? "flex" : "none",
    }
  })

  const onToggle = useCallback(()=>{
    setShow(!show)
  },[setShow, show])

  return (
    <View style={[styles.container]} >
      {isDesktop ? <View style={styles.menuContainer}>
          {ListMenu.map(item=><Link key={item.link} style={styles.menuItem} href={item.link}>
            <ThemedText type="link">{item.name}</ThemedText>
          </Link>)}
      </View> : (isMobileResponsiveness || isMobile) ? <View>
        <TouchableOpacity onPress={onToggle}>
          <Animated.Image style={[animatedClose, {width:18,height:18}]} source={require("@/assets/images/close.png")} />
          <Animated.Image style={[animatedShow, {width:18,height:18}]} source={require("@/assets/images/menu.png")} />
        </TouchableOpacity>
        <Animated.View entering={LightSpeedInRight} exiting={LightSpeedOutLeft} style={[animatedMenu, $menuDropdown(isMobile), { width:screenWidth, height:screenHeight }]}>
          {ListMenu.map(item=><Link key={item.link} style={styles.menuDropdownItem} href={item.link}>
            <ThemedText type="link">{item.name}</ThemedText>
          </Link>)}
        </Animated.View>
      </View> : null}
    </View>
    )
}

const $menuDropdown = (isMobile:boolean):ViewStyle => ({
  backgroundColor:"#fff",
  position: isMobile ? "absolute" : "fixed",
  top:60,
  left:0,
  flexDirection:"column",
  zIndex:100,
})

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    paddingHorizontal:10,
  },
  menuContainer:{
    flexDirection:"row",
  },
  menuItem:{
    marginHorizontal:15,
  },
  menuDropdownItem:{
    padding:20,
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  }
});

