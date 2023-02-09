"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRectsOverlapping = exports.centerOfRect = void 0;
// 矩形の中心点を取得
function centerOfRect(r) {
    return {
        x: r.x + (r.w / 2),
        y: r.y + (r.h / 2),
    };
}
exports.centerOfRect = centerOfRect;
// 2つの矩形が重なっているかどうかを判定
function isRectsOverlapping(r1, r2) {
    return Math.max(r1.x, r2.x) <= Math.min(r1.x + r1.w, r2.x + r2.w) &&
        Math.max(r1.y, r2.y) <= Math.min(r1.y + r1.h, r2.y + r2.h);
}
exports.isRectsOverlapping = isRectsOverlapping;
