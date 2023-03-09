import Nouislider from 'nouislider-react';
import { useEffect, useState } from 'react';
import './CustomSlider.css';

const CustomSlider = (props) => {
  const { isYearBtn, min, max, defaultMin, defaultMax } = props;

  const [isBigGap, setIsBigGap] = useState(false);

  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
  });

  useEffect(() => {
    if (max - min > 94694400000) {
      setIsBigGap(true);
    } else {
      setIsBigGap(false);
    }
  }, [max, min]);

  const formatDateTooltip = (value) => {
    return formatter.format(value).replace(/\s*г\./, '');
  };

  const formatPips = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const formattedValue = formatter.format(value);
    if (isBigGap) {
      const shortMonth = formattedValue.substring(0, 1);
      return shortMonth === 'я' ? year : shortMonth.replace(/[\d\W]+/g, '.');
    }
    const month = formattedValue.substring(0, 3);
    return month === 'янв' ? year : month;
  };

  const filterPips = (value) => {
    const date = formatter.format(value).substring(0, 3);
    return date === 'янв' ? 1 : -1;
  };

  return (
    <>
      <Nouislider
        key={[isYearBtn, isBigGap]}
        range={{ min: min, max: max }}
        step={1000 * 60 * 60 * 24 * 30.75}
        start={[defaultMin, defaultMax]}
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
          density: 50,
          filter: isYearBtn ? filterPips : null,
          format: {
            to: formatPips,
          },
        }}
        connect
      />
    </>
  );
};

export default CustomSlider;
