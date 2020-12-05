import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import LeadForm from "../../components/property/LeadForm";
import Footer from "../../components/property/Footer";
import PropertyCard from "../../components/user/PropertyCard";
import { formatPhoneNumber } from "../../components/property/utils/formatPhoneNumber";

export default function Agent({
  error,
  firstName,
  lastName,
  phone,
  picture,
  email,
  address1,
  city,
  province,
  zipcode,
  smallBio,
  property,
  instagramLink,
  twitterLink,
  facebookLink,
  website,
}) {
  const router = useRouter();

  useEffect(() => {
    async function visitorFunction() {
      const { username } = router.query;
      try {
        await axios.post("/api/visitor", {
          username,
          type: "USER",
        });
      } catch (e) {
        // ERROR send to Bugsnag
      }
    }
    visitorFunction();
  }, []);

  if (router.isFallback) {
    return <div>Loading website...</div>;
  }

  if (error) {
    return (
      <div>
        <h4>Agent not Found</h4>
      </div>
    );
  }

  const { username } = router.query;
  const seoDescription = `${firstName} ${lastName} | Real Estate Agent`;

  return (
    <div>
      <Head>
        <title>Agent Page</title>
        <title>
          {firstName} {lastName} | Real Estate Agent
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
        <meta name="description" content={seoDescription}></meta>
        <meta
          content={picture}
          property="og:image"
          alt="Real Estate Agent"
        ></meta>
        <meta
          content={`${firstName} ${lastName} | Real Estate Agent`}
          property="og:title"
        />
        <meta content={seoDescription} property="og:description"></meta>
        <meta
          content={`https://realtorapp.co/${username}/`}
          property="og:url"
        ></meta>
        <meta content={process.env.FACEBOOK_APP_ID} property="fb:app_id"></meta>
        <meta
          content="https://res.cloudinary.com/real-state-app/image/upload/v1604048527/real-state-app/Original.png"
          alt="Realtor App logo"
          property="og:image"
        ></meta>
        <link
          href={`https://realtorapp.co/${username}/`}
          rel="canonical"
        ></link>
        <meta content="website" property="og:type"></meta>
      </Head>

      {/* TITLE */}

      <div className="bg-white shadow fixed w-full z-10">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={picture}
                  alt="agent profile"
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={picture}
                      alt="agent profile"
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      {firstName} {lastName}
                    </h1>
                  </div>
                  <dl className="flex ml-3 mt-1 flex-row flex-wrap">
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center text-sm text-gray-500 font-medium capitalize mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {`${city}, ${province}`}
                    </dd>

                    <dt className="sr-only">Email</dt>
                    <dd className="flex items-center text-sm text-gray-500 font-medium mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a href={`mailto:${email}`}>{email}</a>
                    </dd>
                    <dt className="sr-only">Phone</dt>
                    <dd className="flex items-center text-sm text-gray-500 font-medium mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a href={`tel:+1${phone}`}>{formatPhoneNumber(phone)}</a>
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="flex items-center text-sm text-gray-500 font-medium mr-6 sm:mt-0 capitalize ">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-3 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-logoRed hover:bg-logoRed-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={() => {
                  const el = window.document.getElementById(
                    "form-lead-section-form"
                  );
                  el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Properties */}

      <div className="bg-logoFont pt-44 sm:pt-36 md:pt-20 lg:pt-12">
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-xl leading-9 font-bold text-white tracking-tight sm:text-4xl">
                My Managed Properties
              </h2>
              <p className="text-xl leading-7 text-gray-300">
                Check the following properties and let me know interrests you.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {property.map((p) => (
                <div key={p.uuid}>
                  <PropertyCard {...p} username={username} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LeadForm
        uuid={username}
        username={username}
        userEmail={email}
        userPhone={phone}
        userAddress1={address1}
        userCity={city}
        userProvince={province}
        userZipcode={zipcode}
        userFirstName={firstName}
        userLastName={lastName}
        userPicture={picture}
        userSmallBio={smallBio}
        color={"logoFont"}
        visitorSource={"agent_site"}
        instagramLink={instagramLink}
        twitterLink={twitterLink}
        facebookLink={facebookLink}
        website={website}
      />

      <Footer color="logoFont" />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const username = ctx.params.username;

  const res = await fetch(
    `${process.env.GATEWAY_API}/home_static/user/${username}`
  );

  if (res.status >= 200 && res.status < 300) {
    const json = await res.json();

    return { props: json, revalidate: 900 };
  }

  return {
    props: {
      error: true,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.GATEWAY_API}/home_static/users`);
  const json = await res.json();

  const paths = json.map((a) => {
    return {
      params: {
        username: a.username.toString(),
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}
