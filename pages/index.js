import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TuitCard from "../components/tuitCard/TuitCard";
import styles from "../styles/Home.module.css";

export default function Home({ tuits }) {
  return (
    <>
      <ul>
        {tuits.map((tuit) => (
          <TuitCard key={tuit.id} />
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);

  const tuits = await response.json();

  return { props: { tuits } };
};
