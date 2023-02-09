"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inRect = exports.restrictVec2 = exports.sumVec2 = exports.angleToVec = exports.distance = void 0;
// 2点間の距離を求める
function distance(v1, v2) {
    return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
}
exports.distance = distance;
// 角度(ラジアン)をベクトルに変換
function angleToVec(a) {
    return {
        x: Math.cos(a),
        y: Math.sin(a)
    };
}
exports.angleToVec = angleToVec;
// 2次元ベクトルの加算
function sumVec2(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}
exports.sumVec2 = sumVec2;
// ベクトルの大きさ(絶対値)を範囲内に制限する。（ベクトルの大きさが上限より大きかったら上限値にし、下限より小さかったら下限値にする。）
function restrictVec2(v, min, max) {
    // ベクトルの大きさ
    const d = Math.sqrt(((v.x) * (v.x) + (v.y * v.y)));
    if (min !== undefined && d < min)
        return {
            x: v.x / d * min,
            y: v.y / d * min,
        };
    if (max !== undefined && d > max)
        return {
            x: v.x / d * max,
            y: v.y / d * max
        };
    return v;
}
exports.restrictVec2 = restrictVec2;
// 点が矩形の中にあるかどうか判定
function inRect(p, r) {
    return r.x < p.x && p.x < r.x + r.w &&
        r.y < p.y && p.y < r.y + r.h;
}
exports.inRect = inRect;
