export function getLocaleSwitchPath(pathname: string, currentLocale: string, targetLocale: string) {
  return pathname.replace(`/${currentLocale}`, `/${targetLocale}`) || `/${targetLocale}`;
}
