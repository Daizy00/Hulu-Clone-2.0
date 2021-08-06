import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>HULU 2.0</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="A Hulu clone made by Daizy which is consuming the data from TMDB movies API. Hope you like it and follow me on github https://github.com/Daizy00"
        />
        <link rel="icon" href="/favicon-16x16.png" />
        <link
          rel="canonical"
          href="https://hulu-clone-2-0-hak1oenpn-daizy00.vercel.app"
        />
      </Head>
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
