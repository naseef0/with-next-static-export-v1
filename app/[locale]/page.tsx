import Link from "next/link";
import { LocaleSwitcher } from "../_components/LocaleSwitcher";


type Params = {
  params: Promise<{
    locale: string;
  }>;
};


const Home = async(props: Params) => {
  const params = await props.params;

  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href={"/"+params?.locale+"/about"}>About</Link> page.
      </p>
        <LocaleSwitcher></LocaleSwitcher>
    </div>
  );
};

export default Home;


export async function generateStaticParams() {
  const locales = ["ae-en","ae-ar","sa-en","sa-ar"];
  
  return locales.map((locale) => ({
    locale: locale,
  }));
}
