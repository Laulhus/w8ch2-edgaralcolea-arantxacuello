import TuitCard from "../components/tuitCard/TuitCard";

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
