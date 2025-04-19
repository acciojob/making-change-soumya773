const makeChange = (c) => {
  c = parseInt(c); // Ensure the input is treated as a number

  return {
    q: Math.floor(c / 25),
    d: Math.floor((c % 25) / 10),
    n: Math.floor((c % 10) / 5),
    p: c % 5
  };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
