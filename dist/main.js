"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
class StopWatch {
    constructor(startTime, endTime) {
        this._startTime = startTime;
        this._endTime = endTime;
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
}
exports.StopWatch = StopWatch;
