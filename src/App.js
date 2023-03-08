import DateSlider from './components/DateSlider';

function App() {
  const minValue = '2015';
  const maxValue = '2017';

  const defaultMinValue = '2015, 5';
  const defaultMaxValue = '2016, 2';

  return (
    <div className="App">
      <DateSlider
        minValue={minValue}
        maxValue={maxValue}
        defaultMinValue={defaultMinValue}
        defaultMaxValue={defaultMaxValue}
      />
    </div>
  );
}

export default App;
