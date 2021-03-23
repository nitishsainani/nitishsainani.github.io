const getRandomColor = () => {
  const colors = [
    "#5c6bc0",
    "#f44336",
    "#03a9f4",
    "#66bb6a",
    "#FF7043",
    "#D4E157",
    "#26A69A",
    "#8D6E63",
  ]
  return colors[Math.floor(Math.random() * colors.length)];
}

const randomColor = getRandomColor();

export default randomColor;
