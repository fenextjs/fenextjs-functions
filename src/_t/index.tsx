import { _TFunciton } from "fenextjs-interface";

export const _tValidate = (d: any, _t?: _TFunciton) => {
    try {
        if (typeof d == "string" && _t) {
            return _t?.(d);
        }
        return d;
    } catch {
        return d;
    }
};
