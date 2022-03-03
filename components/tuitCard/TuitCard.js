const TuitCard = ({ tuit, likeTuit, deleteTuit }) => {
  const calcDate = (date) => {
    let difference = Math.abs(new Date(date) - Date.now());
    return Math.floor(difference / 1000 / 60);
  };

  return (
    <>
      <li className="list">
        <h4>Alguien dice: </h4>
        <p>{tuit.text}</p>
        <div>
          <p>{`Liked ${tuit.likes} times`}</p>
          <p>{`Posted ${calcDate(tuit.date)} minutes ago.`}</p>
        </div>
        <button onClick={() => likeTuit(tuit.id)}>Like!</button>
        <button onClick={() => deleteTuit(tuit.id)}>Delete</button>
      </li>
    </>
  );
};

export default TuitCard;
