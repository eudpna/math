import { Vec2 } from "./Vec";
export type Rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare function centerOfRect(r: Rect): Vec2;
export declare function isRectsOverlapping(r1: Rect, r2: Rect): boolean;
