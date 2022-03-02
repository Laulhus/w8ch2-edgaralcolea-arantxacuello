const TuitCard = ({ tuit: { onDelete, _id, text, like, date } }) => {
  const onClickDelete = () => {
    onDelete(_id);
  };
  return (
    <>
      <li className="list">
        <h4>Tuit del usuario: {_id}</h4>
        <p>{text}</p>
        <div>
          <p>{like}</p>
          <p>{date}</p>
        </div>
        <button onClick={onClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default TuitCard;
