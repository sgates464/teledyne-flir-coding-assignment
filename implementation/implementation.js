import ReadingCounter from "../lib/ReadingCounter.js";

// initialize a new ReadingCounter
const readingCounter = new ReadingCounter();

// create a loop that adds 10 readings to the readingCounter every second

// not using setTimeout due to unexpected behavior within a for loop

// set an initial date
let date = new Date();

for (let i = 0; i < 10; i++) {
  // add 1 second to the date
  date.setSeconds(date.getSeconds() + 1);

  readingCounter.addReading(i, date.toISOString());

  // log the required parameters
  console.log({
    "Number of Readings": readingCounter.numberOfReadings,
    "Min CPS": readingCounter.minCps,
    "Max CPS": readingCounter.maxCps,
    "Total CPS Count": readingCounter.sumCps,
    "First Timestamp": readingCounter.firstTimestamp,
    "Most Recent Timestamp": readingCounter.lastTimestamp,
  });
}

// reset the readingCounter
readingCounter.reset();

// log the required parameters
console.log("RESET");
console.log({
  "Number of Readings": readingCounter.numberOfReadings,
  "Min CPS": readingCounter.minCps,
  "Max CPS": readingCounter.maxCps,
  "Total CPS Count": readingCounter.sumCps,
  "First Timestamp": readingCounter.firstTimestamp,
  "Most Recent Timestamp": readingCounter.lastTimestamp,
});
