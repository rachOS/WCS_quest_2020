import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const chessboard = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]; // idem pour les chiffres
  const arrayChess = [];
  console.log(arrayChess);

  return letters.map(letter =>
    arrayChess.push(numbers.map(number => letter + "-" + number))
  );
};

chessboard();

