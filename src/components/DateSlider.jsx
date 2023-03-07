import { useState } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import styles from './DateSlider.module.css';

const DateSlider = () => {
  const [isOpaqueMonthBtn, setIsOpaqueMonthBtn] = useState(false);
  const [isOpaqueYearBtn, setIsOpaqueYearBtn] = useState(true);

  const handleAllYearClick = () => {
    setIsOpaqueYearBtn(true);
    setIsOpaqueMonthBtn(false);
  };

  const handleAllMonthClick = () => {
    setIsOpaqueMonthBtn(true);
    setIsOpaqueYearBtn(false);
  };

  function timestamp(str) {
    return new Date(str).getTime();
  }

  return (
    <div className={styles.dateSlider}>
      <div className={styles.buttons}>
        <button
          className={`${styles.dateSliderButton} ${
            isOpaqueYearBtn ? styles.dateSliderButtonOpaque : ''
          } `}
          onClick={handleAllYearClick}
        >
          Все года
        </button>
        <button
          className={`${styles.dateSliderButton} ${
            isOpaqueMonthBtn ? styles.dateSliderButtonOpaque : ''
          } `}
          onClick={handleAllMonthClick}
        >
          Месяца
        </button>
      </div>
      <div className={styles.dateSliderRangeContainer}>
        <Nouislider
          range={{ min: timestamp('2010'), max: timestamp('2016') }}
          step={7 * 24 * 60 * 60 * 1000}
          start={[timestamp('2011'), timestamp('2015')]}
          tooltips={[true, true]}
          connect
        />
      </div>
    </div>
  );
};

export default DateSlider;
