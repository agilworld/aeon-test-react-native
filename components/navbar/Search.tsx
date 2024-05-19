import { useCallback, useState } from 'react';
import { View, type ViewProps, StyleSheet, TouchableOpacity, TextInput, TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { isMobile, isDesktop } from '@/utils/userAgent';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

export type SearchProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
}

export const ListMenu = [
  {name:"Showcase", link:"/showcase"},
  {name:"Docs", link:"/docs"},
  {name:"Blog", link:"/blog"},
  {name:"Analytics", link:"/analytics"},
  {name:"Templates", link:"/templates"},
  {name:"Enterprise", link:"/enterprise"},
]

export function Search(_props: SearchProps) {
  const bgColor = useThemeColor({ light: _props.lightColor, dark: _props.darkColor }, 'searchBg');
  const color = useThemeColor({ light: _props.lightColor, dark: _props.darkColor }, 'searchColor');
  const translateX = useSharedValue<number>(0)
  const [show, setShow] = useState<boolean>()

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(translateX.value, {duration:0.4})
    }
  })

  const onToggle = ()=>{
    setShow(!show)
    translateX.value = !show ? 0 : 1100
  }

  return (
    <View style={[styles.container]} >
      {isDesktop ? <TextInput selectionHandleColor={"#ddd"} style={$searchBar(bgColor, color)} testID='search' placeholder='search documentation...' /> : <View>
      {show && <TextInput selectionHandleColor={"#ddd"} style={[$searchBarMobile(bgColor, color), animatedStyle]} testID='search' placeholder='search documentation...' /> }
        <TouchableOpacity onPress={onToggle}>
          {!show ? <Animated.Image tintColor={"#666"} style={{width:20,height:20}} source={require("@/assets/images/magnifying-glass.png")} /> :
          <Animated.Image tintColor={"#666"} style={{width:14,height:14,top:3}} source={require("@/assets/images/close.png")} />}

        </TouchableOpacity>
      </View>}
    </View>
    )
}

const $searchBar = (bgColor:string, color:string): TextInputProps["style"] => ({
    backgroundColor:bgColor,
    borderRadius: 30,
    color:color,
    paddingHorizontal:20,
    width:300,
    paddingVertical:10
})

const $searchBarMobile = (bgColor:string, color:string): TextInputProps["style"] => ({
  backgroundColor:bgColor,
  borderRadius: 30,
  color:color,
  paddingHorizontal:20,
  width:230,
  position:"absolute",
  right:-10,
  top:-8,
  paddingVertical:10
})


const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginLeft:30,
    paddingHorizontal:20,
  },
});

