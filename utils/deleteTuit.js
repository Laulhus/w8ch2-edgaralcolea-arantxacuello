const deleteTuit = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}delete/${id}`, {
    method: "DELETE",
  });
};

export default deleteTuit;
