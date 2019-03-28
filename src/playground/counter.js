let count = 0;

const addOne = () => {
  count++;
  renderCounter();
  console.log(addOne, count);
};

const minusOne = () => {
  count--;
  renderCounter();
  console.log(minusOne);
};

const reset = () => {
  count = 0;
  renderCounter();
  console.log(reset);
};

const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, rootElement);
};

renderCounter();
