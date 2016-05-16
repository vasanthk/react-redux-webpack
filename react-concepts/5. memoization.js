/**
 * Memoization
 * Calling the same function over and over again is wasteful if we know that the function is pure.
 * We can create a memoized version of a function that keeps track of the last argument and last result.
 * That way we don't have to re-execute it if we keep using the same value.
 *
 */

function memoize(fn) {
    var cachedArg;
    var cachedResult;
    return function (arg) {
        if (cachedArg === arg) {
            return cachedResult;
        }
        cachedArg = arg;
        cachedResult = fn(arg);
        return cachedResult;
    };
}

// Has the same API as NameBox but caches its result if its single argument
// has not changed since the last time `MemoizedNameBox` was called.
var MemoizedNameBox = memoize(NameBox);

function NameAndAgeBox(user, currentTime) {
    return FancyBox([
        'Name: ',
        MemoizedNameBox(user.firstName + ' ' + user.lastName),
        'Age in milliseconds: ',
        currentTime - user.dateOfBirth
    ]);
}

// We calculate the output of `NameAndAgeBox` twice, so it will call `MemoizedNameBox` twice.
// However `NameBox` is only going to be called once because its argument has not changed.
const vasa = {firstName: 'Vasa', lastName: 'K'};
NameAndAgeBox(vasa, Date.now());
NameAndAgeBox(vasa, Date.now());