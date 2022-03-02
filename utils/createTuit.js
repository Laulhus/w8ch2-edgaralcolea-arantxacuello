const createTuit = async (tuit) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tuit),
  });
};

export default createTuit;
