const likeTuit = async (id) => {
  const response = await fetch(`http://localhost:4000/like/${id}`, {
    method: "PATCH",
  });
};

export default likeTuit;
