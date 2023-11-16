"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }
    Queue.prototype.size = function () {
        if (this.store[this.rear] === undefined) {
            return null;
        }
        else {
            return this.rear - this.front + 1;
        }
    };
    Queue.prototype.enQueue = function (value) {
        if (this.size() === null) {
            this.store["0"] = value;
        }
        else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    };
    Queue.prototype.deQueue = function () {
        var temp;
        if (this.front === this.rear) {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0;
            this.rear = 0;
            return temp;
        }
        else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front++;
            return temp;
        }
    };
    return Queue;
}());
exports.Queue = Queue;
