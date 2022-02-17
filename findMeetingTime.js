/**
 * getFreeMeetingTime to find free time slots in a day for a common meeting
 * 
 * @param {array[array]} allPeople An array of arrays of time slots
 */
 function getFreeMeetingTime(allPeople) {
    // get a range of time in a day.
    // you can pass the min and max from the input if its not 0 to 24 hrs
    const allTimeSlotsInDay = getAllTimeSlots();
    let tempResult = [];
    
    for (const person of allPeople) {
      for (const time of person) {
        for (
          let i = Number(time.split('-')[0]);
          i < Number(time.split('-')[1]);
          i++
        ) {
          const val = `${i}-${i + 1}`;
          if (!tempResult.includes(val)) {
            tempResult.push(val);
          }
        }
      }
    }
    // merge the times in between. ex '4-5', '5-6' to '4-6'
    return mergeTime(
      allTimeSlotsInDay.filter((time) => !tempResult.includes(time))
    );
  }
  
  function mergeTime(timeArray) {
    const result = [];
    let i = 0;
    while (i < timeArray.length) {
      const arr = timeArray[i].split('-');
      let start = Number(arr[0]);
      let end = Number(arr[1]);
      let counter = 0;
      for (let j = i + 1; j < timeArray.length; j++) {
        const jarr = timeArray[j].split('-');
        const jstart = Number(jarr[0]);
        const jend = Number(jarr[1]);
  
        if (end == jstart || end >= jstart) {
          end = jend;
          counter++;
        }
      }
  
      i = counter === 0 ? ++i : i + counter + 1;
      result.push(`${start}-${end}`);
    }
    return result;
  }
  
  function getAllTimeSlots() {
    const result = [];
    for (let i = 0; i < 24; i = i + 1) {
      result.push(`${i}-${i + 1}`);
    }
    return result;
  }
  
  /**
   * Creating a sample data to test
   */
  
  //sample time slots of persons where they are busy
  const person_1 = ['4-16', '18-24'];
  const person_2 = ['3-14', '17-24'];
  const person_3 = ['6-8', '13-20'];
  const person_4 = ['10-22'];
  
  // Getting an array of time schedules where people are busy.
  const allPeople = [person_1, person_2, person_3, person_4];
  
  // get data back to result
  const result = getFreeMeetingTime(allPeople);
  
  console.log(result);