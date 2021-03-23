import {useEffect, useState} from 'react'

import {overrideThemeVariables} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

function ThemeComponent() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme({
      '--light-bg': '#E9B7B9',
      '--light-bg-dark-shadow': '#ba9294',
      '--light-bg-light-shadow': '#ffdcde',
      '--dark-bg': '#292E35',
      '--dark-bg-dark-shadow': '#21252a',
      '--dark-bg-light-shadow': '#313740',
      '--primary': '#8672FB',
      '--primary-dark': '#4526f9',
      '--primary-light': '#c7befd'
    })
  }, [])

  useEffect(() => {
    theme && overrideThemeVariables(theme)
  }, [theme])

  return <></>;
}

export default ThemeComponent;
