import * as types from "./appTypes";
// события

export const saveBudget = budget => {
  return {
    type: types.SAVE_BUDGET,
    payload: {
      budget: Number(budget)
    }
  };
};

export const addExpense = ({ name, amount }) => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expenses: {
        id: shortid.generate(),
        name,
        amount: Number(amount)
      }
    }
  };
};

export const removeExpense = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id
    }
  };
};
