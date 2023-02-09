import { Vec2 } from "./Vec"

// 矩形
export type Rect = {
    x: number
    y: number
    w: number
    h: number
}

// 矩形の中心点を取得
export function centerOfRect(r: Rect): Vec2 {
    return {
        x: r.x + (r.w / 2),
        y: r.y + (r.h / 2),
    }
}


// 2つの矩形が重なっているかどうかを判定
export function isRectsOverlapping(r1: Rect, r2: Rect): boolean {
    return Math.max(r1.x, r2.x) <= Math.min(r1.x + r1.w, r2.x + r2.w) &&
        Math.max(r1.y, r2.y) <= Math.min(r1.y + r1.h, r2.y + r2.h)
}

