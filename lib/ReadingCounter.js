// Class ReadingCounter

// Constructor
export default class ReadingCounter {
  constructor(cps = [], firstTimestamp = null, lastTimestamp = null) {
    this._cps = cps; // counts per second
    this._firstTimestamp = firstTimestamp;
    this._lastTimestamp = lastTimestamp;
  }

  // Getters

  get numberOfReadings() {
    return this._cps.length;
  }

  get minCps() {
    return this.calculateMinCps();
  }

  get maxCps() {
    return this.calculateMaxCps();
  }

  get sumCps() {
    return this.calculateSumCps();
  }

  get firstTimestamp() {
    return this._firstTimestamp
      ? { status: "ok", value: this._firstTimestamp }
      : { status: "error", message: "No first timestamp" };
  }

  get lastTimestamp() {
    return this._lastTimestamp
      ? { status: "ok", value: this._lastTimestamp }
      : { status: "error", message: "No last timestamp" };
  }

  // Setters

  setFirstTimestamp(timestamp) {
    this._firstTimestamp = timestamp;
  }

  setLastTimestamp(timestamp) {
    this._lastTimestamp = timestamp;
  }

  setCps(count) {
    if (typeof count === "number") {
      this._cps.push(count);
    }
  }

  // Methods

  addReading(count, timestamp) {
    this._cps.push(count);
    this._lastTimestamp = timestamp;
    if (!this._firstTimestamp) {
      this._firstTimestamp = timestamp;
    }
  }

  calculateMinCps() {
    return this._cps.length > 0
      ? { status: "ok", value: Math.min(...this._cps) }
      : { status: "error", message: "No readings" };
  }

  calculateMaxCps() {
    return this._cps.length > 0
      ? { status: "ok", value: Math.max(...this._cps) }
      : { status: "error", message: "No readings" };
  }

  calculateSumCps() {
    return this._cps.length > 0
      ? { status: "ok", value: this._cps.reduce((a, b) => a + b, 0) }
      : { status: "error", message: "No readings" };
  }

  reset() {
    this._cps = [];
    this._firstTimestamp = null;
    this._lastTimestamp = null;
  }
}
