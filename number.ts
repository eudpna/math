
// 数値を範囲内に制限する(数値が上限より大きかったら上限値を返し、下限より小さかったら下限を返す)
export function restrict(n: number, min: number, max: number): number {
    if (n > max) return max
    if (n < min) return min
    return n
}

