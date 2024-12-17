"use client"

import { usePathname, useRouter } from "next/navigation"
const locales: string[] = ["ae-en", "ae-ar", "sa-en", "sa-ar"];

// Function to process the path, split locale, and optionally add a new locale
function processPath(path: string, newLocale?: string): {
  currentLocale: string | null;
  remainingPath: string;
  newPathname: string;
  updatedLocales: string[];
} {
  const pathSegments: string[] = path.split("/").filter(Boolean); // Split path and remove empty segments

  let currentLocale: string | null = null;

  // Check if the first segment is a valid locale
  if (pathSegments.length > 0 && locales.includes(pathSegments[0])) {
    currentLocale = pathSegments.shift() as string; // Remove locale from path
  }

  // Add new locale if provided and not already present
  if (newLocale && !locales.includes(newLocale)) {
    locales.push(newLocale);
  }

  return {
    currentLocale,
    remainingPath: pathSegments.join("/"), // Rejoin remaining path
    updatedLocales: [...locales], // Return updated locales array
    newPathname: "/"+newLocale+"/"+pathSegments.join("/")
    
  };
}
export function LocaleSwitcher() {
  const router = useRouter()
  const pathname= usePathname()

  const changeLocale = (locale: string) => {
    // Change locale while maintaining the current page
    router.push(processPath(pathname,locale)?.newPathname)
  }

  return (
    <div>
      <button onClick={() => changeLocale('ae-en')}>English (UAE)</button>
      <button onClick={() => changeLocale('ae-ar')}>Arabic (UAE)</button>
      <button onClick={() => changeLocale('sa-en')}>English (Saudi)</button>
      <button onClick={() => changeLocale('sa-ar')}>Arabic (Saudi)</button>
    </div>
  )
}