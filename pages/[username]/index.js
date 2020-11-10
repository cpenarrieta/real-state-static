import Head from "next/head";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import LeadForm from "../../components/property/LeadForm";
import Footer from "../../components/property/Footer";
import PropertyCard from "../../components/user/PropertyCard";

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
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>User Loading......I'm sorry for the wait!!</div>;
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

      <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-18 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base leading-6 font-semibold text-indigo-600 tracking-wide uppercase">
              Real Estate Agent
            </h1>
            <p className="mt-1 text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              {firstName} {lastName}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-300">
              ksldjfhl ksdfkljh sdklfjh sdkfljhsdfkjh sdfkljh
              sdfkljhsdkalfjhsdkfljahsdfkljhs dfkljh klsdjfhslkdfj
            </p>
          </div>
        </div>
      </div>

      <LeadForm
        uuid={"XXX"}
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
        color={"indigo"}
        visitorSource={"agent_site"}
      />

      {/* Active Properties */}

      <div className="bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl leading-9 font-extrabold text-white tracking-tight sm:text-4xl">
                My Managed Properties
              </h2>
              <p className="text-xl leading-7 text-gray-300">
                Check the following properties and let me know interrests you.
              </p>
            </div>
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {property.map((p) => {
                return (
                  <li
                    key={p.uuid}
                    className="py-10 px-6 text-center rounded-lg xl:px-10 xl:text-left"
                  >
                    <PropertyCard {...p} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Footer color="indigo" />
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
