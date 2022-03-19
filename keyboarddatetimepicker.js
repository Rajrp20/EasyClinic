// App.js
import 'date-fns';
import React, { useState } from 'react';
import './App.css';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
  
} from '@material-ui/pickers';

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    debugger
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div className="App">

      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        
      <KeyboardDateTimePicker
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
      />

      

      </MuiPickersUtilsProvider>
      

    </div>
  );
}

export default App;
