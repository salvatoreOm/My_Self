import { ThemeProvider as BaseThemeProvider } from "@/hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {children}
    </BaseThemeProvider>
  );
}
