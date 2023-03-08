import { useState } from 'react';
import CustomSlider from '../libs/CustomSlider';
import styles from './DateSlider.module.scss';

const DateSlider = (props) => {
  const { minValue, maxValue, defaultMinValue, defaultMaxValue } = props;

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

  return (
    <div className={styles.dateSlider}>
      <div className={styles.dateSliderButtons}>
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
        <CustomSlider
          isYearBtn={isOpaqueYearBtn}
          min={timestamp(minValue)}
          max={timestamp(maxValue)}
          defaultMin={timestamp(defaultMinValue)}
          defaultMax={timestamp(defaultMaxValue)}
        />
      </div>
    </div>
  );
};

export default DateSlider;
