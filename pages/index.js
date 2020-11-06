import Head from "next/head";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Faq from "../components/landing/Faq";
import Footer from "../components/landing/Footer";

export default function Home({ lifetime }) {
  return (
    <div className="bg-logoPink">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Realtor Property Websites | Realtor App</title>
        <link rel="icon" href="/logo_icon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/180.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/196.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/32.png" />
        <link rel="icon" type="image/png" sizes="88x88" href="/88.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/16.png" />
        <meta name="msapplication-TileImage" content="/144.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#F77E93" />
        <meta name="theme-color" content="#F77E93" />
        <meta
          name="description"
          content="Property website generator for Real Estate Agents in Canada and US. Edit your website, check analytics, manage your leads and set open house hours."
        ></meta>
        <meta
          property="og:description"
          content="Property website generator for Real Estate Agents in Canada and US. Edit your website, check analytics, manage your leads and set open house hours."
        ></meta>
        <meta
          content="Realtor Property Websites | Realtor App"
          property="og:title"
        />
        <meta content="website" property="og:type"></meta>
        <meta content="Realtor App" property="og:site_name"></meta>
        <meta content="https://realtorapp.co/" property="og:url"></meta>
        <meta
          content="https://res.cloudinary.com/real-state-app/image/upload/v1604048527/real-state-app/Original.png"
          property="og:image"
          alt="Realtor App logo"
        ></meta>
        <link href="https://realtorapp.co/" rel="canonical"></link>
      </Head>

      <Hero />
      <Features />
      <Faq />
      <Pricing lifetime={lifetime} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const fetchProducts = async (country) => {
    return fetch(`${process.env.GATEWAY_API}/config/${country}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  // TODO how to get the country
  const { lifetime } = await fetchProducts("CA");

  return {
    props: {
      lifetime,
    },
  };
}
