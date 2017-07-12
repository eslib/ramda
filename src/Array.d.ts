import * as R from 'ramda'

declare global {
  interface Array<T> {

    /**
     * Applies a function to the value at the given index of an array, returning a new copy of the array with the
     * element at the given index replaced with the result of the function application.
     */
    adjust<T>(this: T[], fn: (a: T) => T, index: number): T[];
    adjust<T>(this: T[], fn: (a: T) => T): (index: number) => T[];

    /**
     * Returns true if all elements of the list match the predicate, false if there are any that don't.
     */
    all<T>(this: T[], fn: (a: T) => boolean): boolean;

    /**
     * Returns true if at least one of elements of the list match the predicate, false otherwise.
     */
    any<T>(this: T[], fn: (a: T) => boolean): boolean;

    /**
     * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list,
     * an empty list is returned.
     */
    aperture<T>(this: T[], n: number): T[][];

    /**
     * Returns a new list containing the contents of the given list, followed by the given element.
     */
    append<T, U>(this: T[], el: U): Array<(T & U)>;

    /**
     * `chain` maps a function over a list and concatenates the results.
     * This implementation is compatible with the Fantasy-land Chain spec
     */
    chain<T, U>(this: T[], fn: (n: T) => U[]): U[];

    /**
     * Returns a new list consisting of the elements of the first list followed by the elements
     * of the second.
     */
    concat<T>(this: T[], list2: T[]): T[];

    /**
     * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
     * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
     */
    contains<T>(this: T[], a: T): boolean;

    /**
     * Returns a new list containing all but the first n elements of the given list.
     */
    drop<T>(this: T[], n: number): T[];

    /**
     * Returns a list containing all but the last n elements of the given list.
     */
    dropLast<T>(this: T[], n: number): T[];

    /**
     * Returns a new list containing all but last then elements of a given list, passing each value from the
     * right to the supplied predicate function, skipping elements while the predicate function returns true.
     */
    dropLastWhile<T>(this: T[], fn: (a: T) => boolean): T[];

    /**
     * Returns a new list containing the last n elements of a given list, passing each value to the supplied
     * predicate function, skipping elements while the predicate function returns true.
     */
    dropWhile<T>(this: T[], fn: (a: T) => boolean): T[];

    /**
     * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
     */
    filter<T>(this: T[], fn: (value: T) => boolean): T[];

    /**
     * Returns the first element of the list which matches the predicate, or `undefined` if no
     * element matches.
     */
    find<T>(this: T[], fn: (a: T) => boolean): T | undefined;

    /**
     * Returns the index of the first element of the list which matches the predicate, or `-1`
     * if no element matches.
     */
    findIndex<T>(this: T[], fn: (a: T) => boolean): number;

    /**
     * Returns the last element of the list which matches the predicate, or `undefined` if no
     * element matches.
     */
    findLast<T>(this: T[], fn: (a: T) => boolean): T | undefined;

    /**
     * Returns the index of the last element of the list which matches the predicate, or
     * `-1` if no element matches.
     */
    findLastIndex<T>(this: T[], fn: (a: T) => boolean): number;

    /**
     * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
     * them in a new array, depth-first.
     */
    flatten<T>(this: T[] | T[][]): T[];

    /**
     * Iterate over an input list, calling a provided function fn for each element in the list.
     */
    forEach<T>(this: T[], fn: (x: T) => void): T[];

    /**
     * Creates a new object out of a list key-value pairs.
     */
    fromPairs<V>(this: Array<R.KeyValuePair<string, V>>): { [index: string]: V };
    fromPairs<V>(this: Array<R.KeyValuePair<number, V>>): { [index: number]: V };

    /**
     * Splits a list into sublists stored in an object, based on the result of
     * calling a String-returning function
     * on each element, and grouping the results according to values returned.
     */
    groupBy<T>(this: T[], fn: (a: T) => string): { [index: string]: T[] };

    /**
     * Takes a list and returns a list of lists where each sublist's elements are all "equal" according to the provided equality function
     */
    groupWith<T>(this: T[], fn: (x: T, y: T) => boolean): T[][];

    /**
     * Returns the first element in a list.
     * In some libraries this function is named `first`.
     */
    head<T>(this: T[]): T | undefined;

    /**
     * Given a function that generates a key, turns a list of objects into an object indexing the objects
     * by the given key.
     */
    indexBy<T, U>(this: T[], fn: (a: T) => string): U;

    /**
     * Returns the position of the first occurrence of an item in an array
     * (by strict equality),
     * or -1 if the item is not included in the array.
     */
    indexOf<T>(this: T[], target: T): number;

    /**
     * Returns all but the last element of a list or string.
     */
    init<T>(this: T[]): T[];

    /**
     * Inserts the supplied element into the list, at index index. Note that
     * this is not destructive: it returns a copy of the list with the changes.
     */
    insert<T>(this: T[], index: number, elt: T): T[];
    insert<T>(this: T[], index: number): (elt: T) => T[];

    /**
     * Inserts the sub-list into the list, at index `index`.  _Note  that this
     * is not destructive_: it returns a copy of the list with the changes.
     */
    insertAll<T>(this: T[], index: number, elts: T[]): T[];
    insertAll<T>(this: T[], index: number): (elts: T[]) => T[];

    /**
     * Creates a new list with the separator interposed between elements.
     */
    intersperse<T>(this: T[], separator: T): T[];

    /**
     * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
     * using an appropriate iterator function based on the accumulator type.
     */
    into<T>(this: T[], acc: any, xf: (...a: any[]) => any): T[];
    into<T>(this: T[], acc: any): (xf: (...a: any[]) => any) => T[];

    /**
     * Returns a string made by inserting the `separator` between each
     * element and concatenating all the elements into a single string.
     */
    join(this: T[], x: string): string;

    /**
     * Returns the last element from a list.
     */
    last<T>(this: T[]): T | undefined;

    /**
     * Returns the position of the last occurrence of an item (by strict equality) in
     * an array, or -1 if the item is not included in the array.
     */
    lastIndexOf<T>(this: T[], target: T): number;

    // /**
    //  * Returns the number of elements in the array by returning list.length.
    //  */
    // length(this: T[]): number;

    /**
     * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
     */
    map<T, U>(this: T[], fn: (x: T) => U): U[];

    /**
     * The mapAccum function behaves like a combination of map and reduce.
     */
    mapAccum<T, U, TResult>(this: T[], fn: (acc: U, value: T) => [U, TResult], acc: U): [U, TResult[]];
    mapAccum<T, U, TResult>(this: T[], fn: (acc: U, value: T) => [U, TResult]): (acc: U) => [U, TResult[]];

    /**
     * The mapAccumRight function behaves like a combination of map and reduce.
     */
    mapAccumRight<T, U, TResult>(this: T[], fn: (acc: U, value: T) => [U, TResult], acc: U): [U, TResult[]];
    mapAccumRight<T, U, TResult>(this: T[], fn: (acc: U, value: T) => [U, TResult]): (acc: U) => [U, TResult[]];

    /**
     * Merges a list of objects together into one object.
     */
    mergeAll<T>(this: T[], list: any[]): T;

    /**
     * Returns true if no elements of the list match the predicate, false otherwise.
     */
    none<T>(this: T[], fn: (a: T) => boolean): boolean;

    /**
     * Returns the nth element in a list.
     */
    nth<T>(this: T[], n: number): T;

    /**
     * Takes two arguments, fst and snd, and returns [fst, snd].
     */
    pair<F, S>(this: F, snd: S): [F, S];

    /**
     * Takes a predicate and a list and returns the pair of lists of elements
     * which do and do not satisfy the predicate, respectively.
     */
    partition<T>(this: T[], fn: (a: T) => boolean): T[][];

    /**
     * Returns a new list by plucking the same named property off all objects in the list supplied.
     */
    pluck<T>(this: T[], p: string | number): T[];

    /**
     * Returns a new list with the given element at the front, followed by the contents of the
     * list.
     */
    prepend<T>(this: T[], el: T): T[];

    /**
     * Returns a single item by iterating through the list, successively calling the iterator
     * function and passing it an accumulator value and the current value from the array, and
     * then passing the result to the next call.
     */
    reduce<T, TResult>(this: T[], fn: (acc: TResult, elem: T) => TResult | R.Reduced, acc: TResult): TResult;
    reduce<T, TResult>(this: T[], fn: (acc: TResult, elem: T) => TResult | R.Reduced): (acc: TResult) => TResult;

    /**
     * Groups the elements of the list according to the result of calling the String-returning function keyFn on each
     * element and reduces the elements of each group to a single value via the reducer function valueFn.
     */
    reduceBy<T, TResult>(this: T[], valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string): { [index: string]: TResult };

    /**
     * Returns a value wrapped to indicate that it is the final value of the reduce and
     * transduce functions. The returned value should be considered a black box: the internal
     * structure is not guaranteed to be stable.
     */
    reduced<T>(this: T): R.Reduced;

    /**
     * Returns a single item by iterating through the list, successively calling the iterator
     * function and passing it an accumulator value and the current value from the array, and
     * then passing the result to the next call.
     */
    reduceRight<T, TResult>(this: T[], fn: (acc: TResult, elem: T) => TResult, acc: TResult): TResult;
    reduceRight<T, TResult>(this: T[], fn: (acc: TResult, elem: T) => TResult): (acc: TResult) => TResult;

    /**
     * Similar to `filter`, except that it keeps only values for which the given predicate
     * function returns falsy.
     */
    reject<T>(this: T[], fn: (value: T) => boolean): T[];

    /**
     * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
     */
    remove<T>(this: T[], start: number, count: number): T[];
    remove<T>(this: T[], start: number): (count: number) => T[];

    /**
     * Returns a fixed list of size n containing a specified identical value.
     */
    repeat<T>(this: T, n: number): T[];

    /**
     * Returns a new list with the same elements as the original list, just in the reverse order.
     */
    reverse<T>(this: T[]): T[];

    /**
     * Scan is similar to reduce, but returns a list of successively reduced values from the left.
     */
    scan<T, TResult>(this: T[], fn: (acc: TResult, elem: T) => any, acc: TResult): TResult[];

    /**
     * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
     */
    slice<T>(this: T[], a: number, b: number): T[];

    /**
     * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
     * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
     * if they are equal.
     */
    sort<T>(this: T[], fn: (a: T, b: T) => number): T[];

    /**
     * Sorts the list according to a key generated by the supplied function.
     */
    sortBy<T>(this: T[], fn: (a: any) => R.Ord): T[];

    /**
     * Sorts a list according to a list of comparators.
     */
    sortWith<T>(this: T[], fns: Array<((a: T, b: T) => number)>): T[];

    /**
     * Splits a given list or string at a given index.
     */
    splitAt<T>(this: T[], index: number): T[][];

    /**
     * Splits a collection into slices of the specified length.
     */
    splitEvery<T>(this: T[], a: number): T[][];

    /**
     * Takes a list and a predicate and returns a pair of lists with the following properties:
     * - the result of concatenating the two output lists is equivalent to the input list;
     * - none of the elements of the first output list satisfies the predicate; and
     * - if the second output list is non-empty, its first element satisfies the predicate.
     */
    splitWhen<T, U>(this: U[], pred: (val: T) => boolean): U[][];

    /**
     * Checks if a list starts with the provided values
     */
    startsWith(this: T[], a: T): boolean;

    /**
     * Returns all but the first element of a list or string.
     */
    tail<T>(this: T[]): T[];

    /**
     * Returns a new list containing the first `n` elements of the given list.  If
     * `n > * list.length`, returns a list of `list.length` elements.
     */
    take<T>(this: T[], n: number): T[];

    /**
     * Returns a new list containing the last n elements of the given list. If n > list.length,
     * returns a list of list.length elements.
     */
    takeLast<T>(this: T[], n: number): T[];

    /**
     * Returns a new list containing the last n elements of a given list, passing each value
     * to the supplied predicate function, and terminating when the predicate function returns
     * false. Excludes the element that caused the predicate function to fail. The predicate
     * function is passed one argument: (value).
     */
    takeLastWhile<T>(this: T[], pred: (a: T) => boolean): T[];

    /**
     * Returns a new list containing the first `n` elements of a given list, passing each value
     * to the supplied predicate function, and terminating when the predicate function returns
     * `false`.
     */
    takeWhile<T>(this: T[], fn: (x: T) => boolean): T[];

    /**
     * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
     * list, successively calling the transformed iterator function and passing it an accumulator value and the
     * current value from the array, and then passing the result to the next call.
     */
    transduce<T, U>(this: T[], xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[], acc: T[]): U;
    transduce<T, U>(this: T[], xf: (arg: T[]) => T[]): (fn: (acc: U[], val: U) => U[], acc: T[]) => U;
    transduce<T, U>(this: T[], xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[]): (acc: T[]) => U;

    /**
     * Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, returns a list of x lists of length n.
     */
    transpose<T>(this: T[][]): T[][];

    /**
     * Builds a list from a seed value. Accepts an iterator function, which returns either false
     * to stop iteration or an array of length 2 containing the value to add to the resulting
     * list and the seed to be used in the next call to the iterator function.
     */
    unfold<T, TResult>(this: T, fn: (seed: T) => TResult[] | boolean): TResult[];

    /**
     * Returns a new list containing only one copy of each element in the original list.
     */
    uniq<T>(this: T[]): T[];

    /**
     * Returns a new list containing only one copy of each element in the original list,
     * based upon the value returned by applying the supplied function to each list element.
     * Prefers the first item if the supplied function produces the same value on two items.
     * R.equals is used for comparison.
     */
    uniqBy<T, U>(this: T[], fn: (a: T) => U): T[];

    /**
     * Returns a new list containing only one copy of each element in the original list, based upon the value
     * returned by applying the supplied predicate to two list elements.
     */
    uniqWith<T, U>(this: T[], pred: (x: T, y: T) => boolean): T[];

    /**
     * Returns a new list by pulling every item at the first level of nesting out, and putting
     * them in a new array.
     */
    unnest<T>(this: T[][] | T[]): T[];

    /**
     * Returns a new copy of the array with the element at the provided index replaced with the given value.
     */
    update<T>(this: T[], index: number, value: T): T[];
    update<T>(this: T[], index: number): (value: T) => T[];

    /**
     * Returns a new list without values in the first argument. R.equals is used to determine equality.
     * Acts as a transducer if a transformer is given in list position.
     */
    without<T>(this: T[], list2: T[]): T[];

    /**
     * Creates a new list out of the two supplied by creating each possible pair from the lists.
     */
    xprod<K, V>(this: K[], bs: V[]): Array<R.KeyValuePair<K, V>>;

    /**
     * Creates a new list out of the two supplied by pairing up equally-positioned items from
     * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
     */
    zip<K, V>(this: K[], list2: V[]): Array<R.KeyValuePair<K, V>>;

    /**
     * Creates a new object out of a list of keys and a list of values.
     */
    // TODO: Dictionary<T> as a return value is to specific, any seems to loose
    zipObj<T>(this: T[], keys: string[]): { [index: string]: T };

    /**
     * Creates a new list out of the two supplied by applying the function to each
     * equally-positioned pair in the lists.
     */
    zipWith<T, U, TResult>(this: T[], fn: (x: T, y: U) => TResult, list1: T[]): TResult[];
    zipWith<T, U, TResult>(this: T[], fn: (x: T, y: U) => TResult): (list1: U[]) => TResult[];

  }
}
