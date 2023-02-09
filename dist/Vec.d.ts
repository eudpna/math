import { Rect } from "./Rect";
export type Vec2 = {
    x: number;
    y: number;
};
export declare function distance(v1: Vec2, v2: Vec2): number;
export declare function angleToVec(a: number): Vec2;
export declare function sumVec2(v1: Vec2, v2: Vec2): Vec2;
export declare function restrictVec2(v: Vec2, min?: number, max?: number): Vec2;
export declare function inRect(p: Vec2, r: Rect): boolean;
