import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ tuits }) {
  return (
    <>
      <ul>
        {tuits.map((tuit) => (
          <TuitCard key={tuit.name} tuit={tuit} />
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);

  const tuitAPI = await response.json();
  const tuits = tuitAPI.results;
  return { props: { tuits } };
};
