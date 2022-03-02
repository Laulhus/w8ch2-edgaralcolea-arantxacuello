import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TuitCard from "../components/tuitCard/TuitCard";
import styles from "../styles/Home.module.css";

const Home = ({ tuits }) => {
  return (
    <>
      <ul className="container">
        {tuits.reverse().map((tuit) => (
          <TuitCard key={tuit.id} tuit={tuit} />
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);
  const tuits = await response.json();

  return { props: tuits };
};

export default Home;
