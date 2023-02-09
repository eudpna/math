import { Rect } from "./Rect"

// 2次元ベクトル(二次元座標)
export type Vec2 = {
    x: number,
    y: number
}

// 2点間の距離を求める
export function distance(v1: Vec2, v2: Vec2): number {
    return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2))
}

// 角度(ラジアン)をベクトルに変換
export function angleToVec(a: number): Vec2 {
    return {
        x: Math.cos(a),
        y: Math.sin(a)
    }
}

// 2次元ベクトルの加算
export function sumVec2(v1: Vec2, v2: Vec2): Vec2 {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    }
}

// ベクトルの大きさ(絶対値)を範囲内に制限する。（ベクトルの大きさが上限より大きかったら上限値にし、下限より小さかったら下限値にする。）
export function restrictVec2(v: Vec2, min?: number, max?: number): Vec2 {
    // ベクトルの大きさ
    const d = Math.sqrt(((v.x) * (v.x) + (v.y * v.y)))

    if (min !== undefined && d < min) return {
        x: v.x / d * min,
        y: v.y / d * min,
    }
    if (max !== undefined && d > max) return {
        x: v.x / d * max,
        y: v.y / d * max
    }
    return v
}

// 点が矩形の中にあるかどうか判定
export function inRect(p: Vec2, r: Rect): boolean {
    return r.x < p.x && p.x < r.x + r.w &&
        r.y < p.y && p.y < r.y + r.h
}