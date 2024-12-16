import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const locales = ["ae-en","ae-ar","sa-en","sa-ar"];
  
  return locales.map((locale) => ({
    locale: locale,
  }));
}
