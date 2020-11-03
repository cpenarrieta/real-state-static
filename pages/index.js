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
        <title>Realtor App</title>
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
          content="Realtor App is the new property website generator for Real Estate Agents in Canada and US. Edit your website, check analytics, manage your leads and set open house hours."
        ></meta>
        <meta
          property="og:description"
          content="Realtor App is the new property website generator for Real Estate Agents in Canada and US. Edit your website, check analytics, manage your leads and set open house hours."
        ></meta>
        <meta content="Realtor App - Property Website Generator" property="og:title" />
        <meta content="website" property="og:type"></meta>
        <meta content="Realtor App" property="og:site_name"></meta>
        <meta content="https://realtorapp.co/" property="og:url"></meta>
        <meta content="https://res.cloudinary.com/real-state-app/image/upload/v1604048527/real-state-app/Original.png" property="og:image"></meta>
        <link href="https://realtorapp.co/" rel="canonical"></link>
      </Head>

      <Hero />
      <Features />
      <Faq />
      <Pricing lifetime={lifetime} />
      <Footer />

      <div className="hidden text-red-100 bg-red-100">red</div>
      <div className="hidden text-red-200 bg-red-200">red</div>
      <div className="hidden text-red-300 bg-red-300">red</div>
      <div className="hidden text-red-400 bg-red-400">red</div>
      <div className="hidden text-red-500 bg-red-500">red</div>
      <div className="hidden text-red-600 bg-red-600">red</div>
      <div className="hidden text-red-700 bg-red-700">red</div>
      <div className="hidden text-red-800 bg-red-800">red</div>
      <div className="hidden text-red-900 bg-red-900">red</div>

      <div className="hidden text-orange-100 bg-orange-100">orange</div>
      <div className="hidden text-orange-200 bg-orange-200">orange</div>
      <div className="hidden text-orange-300 bg-orange-300">orange</div>
      <div className="hidden text-orange-400 bg-orange-400">orange</div>
      <div className="hidden text-orange-500 bg-orange-500">orange</div>
      <div className="hidden text-orange-600 bg-orange-600">orange</div>
      <div className="hidden text-orange-700 bg-orange-700">orange</div>
      <div className="hidden text-orange-800 bg-orange-800">orange</div>
      <div className="hidden text-orange-900 bg-orange-900">orange</div>

      <div className="hidden text-yellow-100 bg-yellow-100">yellow</div>
      <div className="hidden text-yellow-200 bg-yellow-200">yellow</div>
      <div className="hidden text-yellow-300 bg-yellow-300">yellow</div>
      <div className="hidden text-yellow-400 bg-yellow-400">yellow</div>
      <div className="hidden text-yellow-500 bg-yellow-500">yellow</div>
      <div className="hidden text-yellow-600 bg-yellow-600">yellow</div>
      <div className="hidden text-yellow-700 bg-yellow-700">yellow</div>
      <div className="hidden text-yellow-800 bg-yellow-800">yellow</div>
      <div className="hidden text-yellow-900 bg-yellow-900">yellow</div>

      <div className="hidden text-green-100 bg-green-100">green</div>
      <div className="hidden text-green-200 bg-green-200">green</div>
      <div className="hidden text-green-300 bg-green-300">green</div>
      <div className="hidden text-green-400 bg-green-400">green</div>
      <div className="hidden text-green-500 bg-green-500">green</div>
      <div className="hidden text-green-600 bg-green-600">green</div>
      <div className="hidden text-green-700 bg-green-700">green</div>
      <div className="hidden text-green-800 bg-green-800">green</div>
      <div className="hidden text-green-900 bg-green-900">green</div>

      <div className="hidden text-blue-100 bg-blue-100">blue</div>
      <div className="hidden text-blue-200 bg-blue-200">blue</div>
      <div className="hidden text-blue-300 bg-blue-300">blue</div>
      <div className="hidden text-blue-400 bg-blue-400">blue</div>
      <div className="hidden text-blue-500 bg-blue-500">blue</div>
      <div className="hidden text-blue-600 bg-blue-600">blue</div>
      <div className="hidden text-blue-700 bg-blue-700">blue</div>
      <div className="hidden text-blue-800 bg-blue-800">blue</div>
      <div className="hidden text-blue-900 bg-blue-900">blue</div>

      <div className="hidden text-indigo-100 bg-indigo-100">indigo</div>
      <div className="hidden text-indigo-200 bg-indigo-200">indigo</div>
      <div className="hidden text-indigo-300 bg-indigo-300">indigo</div>
      <div className="hidden text-indigo-400 bg-indigo-400">indigo</div>
      <div className="hidden text-indigo-500 bg-indigo-500">indigo</div>
      <div className="hidden text-indigo-600 bg-indigo-600">indigo</div>
      <div className="hidden text-indigo-700 bg-indigo-700">indigo</div>
      <div className="hidden text-indigo-800 bg-indigo-800">indigo</div>
      <div className="hidden text-indigo-900 bg-indigo-900">indigo</div>

      <div className="hidden text-purple-100 bg-purple-100">purple</div>
      <div className="hidden text-purple-200 bg-purple-200">purple</div>
      <div className="hidden text-purple-300 bg-purple-300">purple</div>
      <div className="hidden text-purple-400 bg-purple-400">purple</div>
      <div className="hidden text-purple-500 bg-purple-500">purple</div>
      <div className="hidden text-purple-600 bg-purple-600">purple</div>
      <div className="hidden text-purple-700 bg-purple-700">purple</div>
      <div className="hidden text-purple-800 bg-purple-800">purple</div>
      <div className="hidden text-purple-900 bg-purple-900">purple</div>

      <div className="hidden text-pink-100 bg-pink-100">pink</div>
      <div className="hidden text-pink-200 bg-pink-200">pink</div>
      <div className="hidden text-pink-300 bg-pink-300">pink</div>
      <div className="hidden text-pink-400 bg-pink-400">pink</div>
      <div className="hidden text-pink-500 bg-pink-500">pink</div>
      <div className="hidden text-pink-600 bg-pink-600">pink</div>
      <div className="hidden text-pink-700 bg-pink-700">pink</div>
      <div className="hidden text-pink-800 bg-pink-800">pink</div>
      <div className="hidden text-pink-900 bg-pink-900">pink</div>
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
