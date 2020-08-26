import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";
import PropertyPage from "../../components/property";

export default function Property({ error, ...property }) {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["visitorId"]);

  useEffect(() => {
    if (!cookies.visitorId) {
      setCookie("visitorId", uuidv4(), {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: true,
        maxAge: 2147483647,
      });
    }
  }, []);

  if (router.isFallback) {
    return <div>Properety Loading......I'm sorry for the wait!!</div>;
  }

  const { username } = router.query;

  if (error) {
    return (
      <div>
        <h4>Property not Found</h4>
        <Link href={`/${username}`}>
          <a>Agent page</a>
        </Link>
      </div>
    );
  }

  return <PropertyPage {...property} username={username} />;
}

export async function getStaticProps(ctx) {
  const uuid = ctx.params.uuid;

  try {
    const res = await axios(`${process.env.STATIC_API}/property/${uuid}`);

    return { props: res.data, revalidate: 900 };
  } catch (e) {
    return {
      props: {
        error: true,
      },
      revalidate: 1,
    };
  }
}

export async function getStaticPaths() {
  const res = await axios(`${process.env.STATIC_API}/properties`);

  const paths = res.data.map((a) => {
    return {
      params: {
        uuid: a.uuid.toString(),
        username: a.username.toString(),
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}
