import Nouislider from 'nouislider-react';
import './CustomSlider.css';

const CustomSlider = (props) => {
  const { isYearBtn, min, max, defaultMin, defaultMax } = props;

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
  };

  const filterPips = (value) => {
    const date = formatter.format(value).substring(0, 3);
    return date === 'янв' ? 1 : -1;
  };

  return (
    <>
      <Nouislider
        key={isYearBtn}
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
