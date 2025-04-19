import { useState, useEffect } from 'react'
import { UAParser } from 'ua-parser-js'

export function useIsMobile() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const parser = new UAParser(window.navigator.userAgent)

    const deviceType = parser.getDevice().type

    setIsMobile(deviceType === 'mobile' || deviceType === 'tablet')

  }, [])

  return isMobile
  
}