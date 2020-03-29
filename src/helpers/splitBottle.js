const splitBottle = currentSize => {
  const arr = [
    {
      type: "3",
      count: 0
    },
    {
      type: "2",
      count: 0
    },
    {
      type: "1.5",
      count: 0
    },
    {
      type: "1",
      count: 0
    },
    {
      type: "0.5",
      count: 0
    }
  ];

  const helpFn = num =>
    arr.forEach(el => (el.type === num ? (el.count += 1) : null));

  while (currentSize) {
    if (currentSize - 3 >= 0) {
      helpFn("3");
      currentSize -= 3;
      continue;
    }
    if (currentSize - 2 >= 0) {
      helpFn("2");
      currentSize -= 2;
      continue;
    }
    if (currentSize - 1.5 >= 0) {
      helpFn("1.5");
      currentSize -= 1.5;
      continue;
    }
    if (currentSize - 1 >= 0) {
      helpFn("1");
      currentSize -= 1;
      continue;
    }
    if (currentSize - 0.5 >= 0) {
      helpFn("0.5");
      currentSize -= 0.5;
      continue;
    }
  }

  return arr;
};

export default splitBottle;
