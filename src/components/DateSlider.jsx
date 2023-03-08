import { useState } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import styles from './DateSlider.module.scss';

const DateSlider = () => {
  const [isOpaqueYearBtn, setIsOpaqueYearBtn] = useState(true);
  const [isOpaqueMonthBtn, setIsOpaqueMonthBtn] = useState(false);

  const handleAllYearClick = () => {
    setIsOpaqueYearBtn(true);
    setIsOpaqueMonthBtn(false);
  };

  const handleAllMonthClick = () => {
    setIsOpaqueMonthBtn(true);
    setIsOpaqueYearBtn(false);
  };

  const timestamp = (str) => {
    return new Date(str).getTime();
  };

  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
  });

  const formatDateTooltip = (value) => {
    return formatter.format(value).replace(/\s*г\./, '');
  };

  const formatPips = (value) => {
    const date = new Date(value);
    const month = formatter.format(value).substring(0, 3);
    const year = date.getFullYear();
    return month === 'янв' ? year : month;
  }

  const filterPips = (value) => {
    const date = formatter.format(value).substring(0, 3);
    return date === 'янв' ? 1 : -1;
  }

  return (
    <div className={styles.dateSlider}>
      <div className={styles.dateSliderButtons}>
        <button
          className={`${styles.dateSliderButton} ${
            isOpaqueYearBtn ? styles.dateSliderButtonOpaque : ''
          } `}
          onClick={handleAllYearClick}
        >
          Years
        </button>
        <button
          className={`${styles.dateSliderButton} ${
            isOpaqueMonthBtn ? styles.dateSliderButtonOpaque : ''
          } `}
          onClick={handleAllMonthClick}
        >
          Months
        </button>
      </div>
      <div className={styles.dateSliderRangeContainer}>
        <Nouislider
          key={isOpaqueYearBtn}
          range={{ min: timestamp('2015'), max: timestamp('2017') }}
          step={1000 * 60 * 60 * 24 * 30.75}
          start={[timestamp('2015, 5'), timestamp('2016, 2')]}
          tooltips={[
            {
              to: formatDateTooltip,
            },
            {
              to: formatDateTooltip,
            },
          ]}
          pips={{
            mode: 'steps',
            density: 3,
            filter: isOpaqueYearBtn ? filterPips : null,
            format: {
              to: formatPips,
            },
          }}
          connect
        />
      </div>
    </div>
  );
};

export default DateSlider;
