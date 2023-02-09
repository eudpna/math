"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrict = void 0;
// 数値を範囲内に制限する(数値が上限より大きかったら上限値を返し、下限より小さかったら下限を返す)
function restrict(n, min, max) {
    if (n > max)
        return max;
    if (n < min)
        return min;
    return n;
}
exports.restrict = restrict;
