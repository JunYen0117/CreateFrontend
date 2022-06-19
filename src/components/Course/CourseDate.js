import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { isSameDay } from 'date-fns';

function CourseDate() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  const disabledDays = [
    new Date(2022, 5, 20), // 不想禁用的日子
    new Date(2022, 5, 21),
  ];

  function isDayDisabled(day) {
    return !disabledDays.some((disabledDay) => isSameDay(day, disabledDay));
  }

  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        disabled={isDayDisabled}
      />
    </>
  );
}
export default CourseDate;
