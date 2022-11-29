import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../date.css";

function Profile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div>
      <DatePicker
        id="date_picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()}
        showDisabledMonthNavigation
      />
    </div>
  );
}

export default Profile;
