import { createContext } from 'react'

export const defaultTheme = {
  isHiredHovered: false,
}

export const ThemeContext = createContext(defaultTheme)
