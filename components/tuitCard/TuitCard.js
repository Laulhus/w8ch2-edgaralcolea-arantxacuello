const TuitCard = ({ tuit }) => {
  const onClickDelete = () => {
    onDelete(_id);
  };
  return (
    <>
      <li className="list">
        <h4>Tuit del usuario: {tuit.id}</h4>
        <p>{tuit.text}</p>
        <div>
          <p>{tuit.like}</p>
          <p>{tuit.date}</p>
        </div>
        <button onClick={onClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default TuitCard;
