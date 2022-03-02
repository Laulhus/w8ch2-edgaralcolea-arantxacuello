import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import TuitCard from "../components/tuitCard/TuitCard";
import styles from "../styles/Home.module.css";

const Home = ({ tuits }) => {
  const deleteTuit = (id) => {};
  return (
    <>
      <ul className="container">
        {tuits.map((tuit) => (
          <TuitCard
            key={tuit.id}
            tuit={tuit}
            onDelete={() => deleteTuit(tuit._id)}
          />
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
