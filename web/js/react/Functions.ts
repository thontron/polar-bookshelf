
import isEqual from "react-fast-compare";

export function fastDeepEqual(a: any, b: any) {
    return isEqual(a, b);
}

