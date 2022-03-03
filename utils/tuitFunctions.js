export const createTuit = async (tuit) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tuit),
  });
  return await response.json();
};

export const deleteTuit = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}delete/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const likeTuit = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}like/${id}`, {
    method: "PATCH",
  });
  return await response.json();
};
