/**
 * Once we want to memoize multiple items in a list memoization becomes much harder.
 * You have to figure out some complex caching algorithm that balances memory usage with frequency.
 * Luckily, UIs tend to be fairly stable in the same position. The same position in the tree gets the same value every time.
 * This tree turns out to be a really useful strategy for memoization.
 * We can use the same trick we used for state and pass a memoization cache through the composable function.
 */

function memoize(fn) {
    // Note how in the previous memoization example, we kept the cached argument and the
    // cached result as a local variable inside `memoize`. This is not useful for lists
    // because in a list, the function will be called many times with a different argument.

    // Now the function returned by `memoize` accepts the `memoizationCache` as an argument
    // in the hope that the list containing a component can supply a "local" cache for each item.
    return function (arg, memoizationCache) {
        if (memoizationCache.arg === arg) {
            return memoizationCache.result;
        }
        const result = fn(arg);
        memoizationCache.arg = arg;
        memoizationCache.result = result;
        return result;
    };
}

function FancyBoxWithState(children,
                           stateMap,
                           updateState,
                           memoizationCacheMap) {
    return FancyBox(
        children.map(child => child.continuation(
            stateMap.get(child.key),
            updateState,
            // When the UI changes, it usually happens just in some parts of the screen.
            // This means that most children with the same keys will likely render to the same output.
            // We give each child its own memoization map, so that in the common case its output can be memoized.
            memoizationCacheMap.get(child.key)
        ))
    );
}

const MemoizedFancyNameBox = memoize(FancyNameBox);