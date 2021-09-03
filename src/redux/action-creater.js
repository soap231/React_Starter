export const addOneToCounter = (number) => {
  return {
    type: "ADD",
    payload: number,
  };
};

export const DeleteOneToCounter = (number) => {
  return {
    type: "CREATE",
    payload: number,
  };
};
