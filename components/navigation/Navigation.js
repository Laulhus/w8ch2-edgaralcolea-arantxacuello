import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul className="nav">
        <li>


          <Link href="/">All Tuits</Link>

        </li>
        <li>
          <Link href="/tuit">Tuitea</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
