import TuitCard from "../components/tuitCard/TuitCard";
import { deleteTuit, likeTuit } from "../utils/tuitFunctions";

const Home = ({ tuits }) => {
  return (
    <>
      <ul className="container">
        {tuits.reverse().map((tuit) => (
          <TuitCard
            key={tuit.id}
            tuit={tuit}
            likeTuit={likeTuit}
            deleteTuit={deleteTuit}
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
