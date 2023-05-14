const allTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SIGN_IN: "SIGN_IN",
};

function increment() {
  return { type: allTypes.INCREMENT };
}

function decrement() {
  return { type: allTypes.DECREMENT };
}

function signIn() {
  return { type: allTypes.SIGN_IN };
}

export { allTypes, increment, decrement, signIn };
