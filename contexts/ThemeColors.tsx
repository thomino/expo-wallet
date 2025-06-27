import { useTheme } from 'providers/ThemeProvider';

export const useThemeColors = () => {
  const { theme } = useTheme(); 
  const isDark = theme === 'dark';

  return {
    icon: isDark ? 'white' : 'black',
    bg: isDark ? '#18181C' : '#F4F4F5',
    invert: isDark ? '#000000' : '#cccccc',
    secondary: isDark ? '#1F1E1F' : '#ffffff',
    highlight: '#00A6F4',    
    border: isDark ? '#404040' : '#E2E8F0',
    text: isDark ? 'white' : 'black',
    isDark
  };
};

export default useThemeColors;