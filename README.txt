Teledyne / Flir programming assignment

Background:

The Teledyne FLIR office in Oak Ridge, Tennessee designs,
manufactures, and services a series of handheld radiation
detectors. You can see our full line of products here:

https://www.flir.com/browse/public-safety/cbrne-
detectors/radiological/

The detectors in our devices will react when hit by a gamma
ray and produce a signal that is measurable by the
embedded electronics. One of the primary functions of our
device is to count the number of these signals produced over
a given period of time. Typically this is then presented to the
user as X counts per second (e.g. 5 cps) and the display is
updated with a new cps value every second.


Assignment Description:

Write a library in any language you choose to keep track of statistics for the cps readings coming
from the detector. You can assume the readings will always be non-negative and indicate the number
of times a gamma ray hit the detector during the last second.
- A new reading will usually be submitted to the library every second.
- The following information must be retrievable from the library:
    - Number of readings
    - Min (cps)
    - Max (cps)
    - Total number of counts (sum of the readings)
    - Timestamp of the first and last (most recent) reading
- The library must include a way to reset all statistics.



Notes:

- This should not take more than a couple hours to
complete.
- This is code that actually had to be written for this job.
- The point of this exercise is for us to get a feel for the code
you write.
- Some of the problem description may be intentionally left
ambiguous, so think about the assumptions you’re
making, and document them for bonus points.




Assumptions:
- Readings will always be non-negative, could be 0
- For now, assume no historical data
- Detector will provide a reading of the number of gamma rays hit each second
- timestamps will be provided by detector/program in ISO format


Project Structure:
/implementation
    - implementation.js - contains a simple script to see the library in action
/lib 
    - ReadingCounter.js - contains the class and methods
    - ReadingCounter.test.js - tests for the ReadingCounter class
- ...rest - config and package files


How to run this:

assuming node.js and jest are installed globally

first run `npm install` in the terminal

to run the tests run `npm test` in the terminal

to run the implementation run `cd implementation` then `node implementation.js`


GAMEPLAN:

Create a class with properties: 
- Count per second: array (default: [])
- First reading: timestamp (default: null)
- Last/most recent reading: timestamp (default: null)

getters:
- Number of readings
- Min cps
- Max cps
- sum of cps readings
- first timestamp
- last timestamp

setters:
- add a reading
- set first timestamp
- set last timestamp

methods:
- handle a new reading
- calculate Min cps
- calculate Max cps
- calculate sum cps
- reset statistics


Return formats (simple format):

on success: 
{
    status: "ok",
    value: <val>
}

on error (data not available):
{
    status: "error",
    message: <error message>
}





