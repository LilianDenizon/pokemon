function ButtonStyle() {
  const Background = (e) => {
    e.preventDefault()
    const color = e.target.value
      document.documentElement.style
    .setProperty("--bg-color", color);
  };
  return (
    <select name="select-style" id="select-style" onChange={Background}>
        <option value="rgb(13, 15, 59)">Blue</option>
        <option value="rgb(51, 25, 79)">Purple</option>
    </select>
  );
}

export default ButtonStyle