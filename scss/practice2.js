function convertToNumbers(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return str.replace(/[a-z]/gi, function(m) {
    return letters.indexOf(m.toLowerCase()) + 1;
  });
}

const positionChecker = (ships, length, boundary) => {
  const arr = [];

  const ship = ships.split(" ");
  const startingPosition = convertToNumbers(ship[0]); // A2 or 11
  console.log("starting position", startingPosition);
  const firstLetter = startingPosition[0]; // first letter
  const direction = ship[1]; // Horizontal
  if (startingPosition[0] > boundary.x) {
    throw new Error(
      "The first position cannot be larger than the boundary size"
    );
  }

  if (direction === "Horizontal" && startingPosition.length === 2) {
    let counter = parseInt(startingPosition[0]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[1];
      arr.push(counter + "," + secondNum);
      counter++;
    }
  } else if (
    direction === "Horizontal" &&
    startingPosition.length === 3 &&
    firstLetter.length === 2
  ) {
    let counter = parseInt(startingPosition[0] + startingPosition[1]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[2];
      arr.push(counter + "," + secondNum);
      counter++;
    }
  } else if (
    direction === "Horizontal" &&
    (startingPosition.length === 3) & (firstLetter.length === 1)
  ) {
    let counter = parseInt(startingPosition[0]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[1] + startingPosition[2];

      arr.push(counter + "," + secondNum);
      counter += 1;
    }
  }

  //Vertical
  if (direction === "Vertical" && startingPosition.length === 2) {
    let counter = parseInt(startingPosition[1]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0];
      let secondNum = counter;

      arr.push(firstNum + "," + secondNum);
      counter += 1;
    }
  } else if (
    direction === "Vertical" &&
    startingPosition.length === 3 &&
    firstLetter.length === 2
  ) {
    let counter = parseInt(startingPosition[2]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0] + startingPosition[1];
      let secondNum = counter;

      arr.push(firstNum + "," + secondNum);
      counter += 1;
    }
  }
  //First position is 10
  else if (
    direction === "Vertical" &&
    startingPosition.length === 3 &&
    firstLetter.length === 1
  ) {
    let counter = parseInt(startingPosition[1] + startingPosition[2]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0];
      let secondNum = counter;

      arr.push(startingPosition[0] + "," + counter);
      counter += 1;
    }
  }
  return arr;
};

const board = {
  x: 10,
  y: 10
};

const carrier = "A2 Horizontal";
console.log(positionChecker(carrier, 5, board));
