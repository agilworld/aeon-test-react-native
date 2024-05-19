import { Platform } from "react-native"

export const isDesktop = 
  ( Platform.OS === "web" && typeof window != "undefined" && !isMobileResponsive() )

export const isMobileResponsiveness = 
  ( Platform.OS === "web" && typeof window != "undefined" && isMobileResponsive() )

export const isMobile = Platform.OS === "android" || Platform.OS === "ios"


export function isNonMobileApp(){
  if( typeof window != "undefined"  ) {
    let agent = navigator.userAgent.toLowerCase();
     return agent.indexOf('chrome') != -1 || 
      agent.indexOf('msie') != -1 || 
      agent.indexOf('safari') != -1 || 
      agent.indexOf('firefox') != -1 || 
      agent.indexOf('macos') != -1 ||
      agent.indexOf('linux') != -1 || 
      agent.indexOf('windows') != -1
  } 

  return false
  
}

export function isMobileResponsive(){
  if( typeof window != "undefined"  ) {
    let agent = navigator.userAgent.toLowerCase();
     return agent.indexOf('iphone') != -1 || 
      agent.indexOf('android') != -1
  } 

  return false
  
}