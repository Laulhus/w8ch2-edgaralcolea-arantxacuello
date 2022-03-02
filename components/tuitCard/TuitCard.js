const TuitCard = ({ tuit: { onDelete, _id, text, like, date } }) => {
  const onClickDelete = () => {
    onDelete(_id);
  };

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
          <p>{tuit.like}</p>
          <p>{`Posted ${calcDate(tuit.date)} minutes ago.`}</p>

        </div>
        <button onClick={onClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default TuitCard;
