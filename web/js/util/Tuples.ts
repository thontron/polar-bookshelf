import {Preconditions} from '../Preconditions';
import {Optional} from './ts/Optional';

export class Tuples {

    /**
     * Go over the array-like object and return tuples with prev, curr, and next
     * properties so that we can peek at siblings easily.  If the prev and / or
     * next are not present these values are null.
     *
     * This can be used for algorithms that need to peek ahead or behind
     * inside an iterative algorithm
     *
     */
    public static createSiblings<T>(arr: ReadonlyArray<T>): ReadonlyArray<IEntryContext<T>> {

        Preconditions.assertPresent(arr, "arr");

        const result: Array<IEntryContext<T>> = [];

        for (let idx = 0; idx < arr.length; ++idx) {

            result.push({
                curr: arr[idx],
                prev: Optional.of(arr[idx - 1]).getOrUndefined(),
                next: Optional.of(arr[idx + 1]).getOrUndefined()
            });

        }

        return result;

    }

    public static firstMatching<T>(arr: ReadonlyArray<T>,
                                   predicate: (input: T) => boolean): IEntryContext<T> | undefined {

        const siblings = this.createSiblings(arr);

        const filtered = siblings.filter(current => predicate(current.curr));

        if (filtered.length !== 0) {
            return filtered[0];
        }

        return undefined;

    }

}

/**
 * Represents a 'position' object for createSiblings() that has a curr
 * (current), prev (previous), and next references for working with lists of
 * objects.  The position allow sus to know where we currently are but also the
 * previous and future states.
 */
export interface IEntryContext<T> {

    readonly prev?: T;

    readonly curr: T;

    readonly next?: T;

}
