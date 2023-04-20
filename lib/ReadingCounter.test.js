import ReadingCounter from "./ReadingCounter";

// initialize a new ReadingCounter before each test

const readingCounter = new ReadingCounter();

console.log(readingCounter);

afterEach(() => {
  readingCounter.reset();
});

// Test getters in order of appearance in lib/index.js

test("numberOfReadings should return 0 if there are no readings", () => {
  expect(readingCounter.numberOfReadings).toBe(0);
});

test("numberOfReadings should return the number of readings that have been added", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(6, new Date().toISOString());
  expect(readingCounter.numberOfReadings).toBe(2);
});

test("minCps should return an error message if there are no readings", () => {
  expect(readingCounter.minCps).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("minCps should return the minimum cps value if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.minCps).toEqual({ status: "ok", value: 3 });
});

test("maxCps should return an error message if there are no readings", () => {
  expect(readingCounter.maxCps).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("maxCps should return the maximum cps value if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.maxCps).toEqual({ status: "ok", value: 5 });
});

test("sumCps should return an error message if there are no readings", () => {
  expect(readingCounter.sumCps).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("sumCps should return the sum of the cps values if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.sumCps).toEqual({ status: "ok", value: 8 });
});

test("firstTimestamp should return an error message if there is no first timestamp", () => {
  expect(readingCounter.firstTimestamp).toEqual({
    status: "error",
    message: "No first timestamp",
  });
});

test("firstTimestamp should return the first timestamp if there is one", () => {
  const timestamp = new Date().toISOString();
  readingCounter.addReading(5, timestamp);
  expect(readingCounter.firstTimestamp).toEqual({
    status: "ok",
    value: timestamp,
  });
});

test("lastTimestamp should return an error message if there is no last timestamp", () => {
  expect(readingCounter.lastTimestamp).toEqual({
    status: "error",
    message: "No last timestamp",
  });
});

test("lastTimestamp should return the last timestamp if there is one", () => {
  const timestamp = new Date().toISOString();
  readingCounter.addReading(5, timestamp);
  expect(readingCounter.lastTimestamp).toEqual({
    status: "ok",
    value: timestamp,
  });
});

// setters handled in add reading
// methods in order of appearance in lib/index.js

test("addReading should add a reading to the cps array", () => {
  readingCounter.addReading(5, new Date().toISOString());
  expect(readingCounter.numberOfReadings).toBe(1);
  expect(readingCounter._cps[0]).toBe(5);
});

test("addReading should set the lastTimestamp", () => {
  const timestamp = new Date().toISOString();
  readingCounter.addReading(5, timestamp);
  expect(readingCounter.lastTimestamp).toEqual({
    status: "ok",
    value: timestamp,
  });
});

test("addReading should set the firstTimestamp if it is null", () => {
  const timestamp = new Date().toISOString();
  readingCounter.addReading(5, timestamp);
  expect(readingCounter.firstTimestamp).toEqual({
    status: "ok",
    value: timestamp,
  });
});

test("addReading should not change the firstTimestamp if it is not null", () => {
  const firstTimestamp = new Date();
  const firstTimestampISO = firstTimestamp.toISOString();
  const secondTimestamp = new Date(
    firstTimestamp.getTime() + 1000
  ).toISOString();
  readingCounter.addReading(5, firstTimestampISO);
  readingCounter.addReading(6, secondTimestamp);
  expect(readingCounter.firstTimestamp).toEqual({
    status: "ok",
    value: firstTimestampISO,
  });
});

test("calculateMinCps should return an error message if there are no readings", () => {
  expect(readingCounter.calculateMinCps()).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("calculateMinCps should return the minimum cps value if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.calculateMinCps()).toEqual({
    status: "ok",
    value: 3,
  });
});

test("calculateMaxCps should return an error message if there are no readings", () => {
  expect(readingCounter.calculateMaxCps()).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("calculateMaxCps should return the maximum cps value if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.calculateMaxCps()).toEqual({
    status: "ok",
    value: 5,
  });
});

test("calculateSumCps should return an error message if there are no readings", () => {
  expect(readingCounter.calculateSumCps()).toEqual({
    status: "error",
    message: "No readings",
  });
});

test("calculateSumCps should return the sum of the cps values if there are readings", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  expect(readingCounter.calculateSumCps()).toEqual({
    status: "ok",
    value: 8,
  });
});

test("reset should reset the reading counter", () => {
  readingCounter.addReading(5, new Date().toISOString());
  readingCounter.addReading(3, new Date().toISOString());
  readingCounter.reset();
  expect(readingCounter.numberOfReadings).toBe(0);
  expect(readingCounter._cps).toEqual([]);
  expect(readingCounter.firstTimestamp).toEqual({
    status: "error",
    message: "No first timestamp",
  });
  expect(readingCounter.lastTimestamp).toEqual({
    status: "error",
    message: "No last timestamp",
  });
  expect(readingCounter.minCps).toEqual({
    status: "error",
    message: "No readings",
  });
  expect(readingCounter.maxCps).toEqual({
    status: "error",
    message: "No readings",
  });
  expect(readingCounter.sumCps).toEqual({
    status: "error",
    message: "No readings",
  });
});
