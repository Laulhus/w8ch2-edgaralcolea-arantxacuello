const TuitCard = ({ tuit: date, onDelete, _id }) => {
  const onClickDelete = () => {
    onDelete(_id);
  };
  return (
    <>
      <li>
        <div>
          <p>Date: {date}</p>
        </div>
        <button onClick={onClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default TuitCard;
