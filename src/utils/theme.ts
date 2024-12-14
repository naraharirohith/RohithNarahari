export function setTheme(isDark: boolean) {
  const root = window.document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('darkMode', JSON.stringify(isDark));
}

export function getInitialTheme(): boolean {
  const saved = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return saved ? JSON.parse(saved) : prefersDark;
}