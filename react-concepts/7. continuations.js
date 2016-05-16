/**
 * Unfortunately, since there are so many lists of lists all over the place in UIs, it becomes quite a lot of boilerplate to manage that explicitly.
 * We can move some of this boilerplate out of our critical business logic by deferring execution of a function.
 *
 * For example, by using "currying" (bind in JavaScript).
 * Then we pass the state through from outside our core functions that are now free of boilerplate.
 * This isn't reducing boilerplate but is at least moving it out of the critical business logic.
 */

function FancyUserList(users) {
    // `UserList` needs three arguments: `users`, `likesPerUser`, and `updateUserLikes`.

    // We want `FancyUserList` to be ignorant of the fact that `UserList` also
    // needs `likesPerUser` and `updateUserLikes` so that we don't have to wire
    // the arguments for bookkeeping this state through `FancyUserList`.

    // We can cheat by only providing the first argument for now:
    const children = UserList.bind(null, users);

    // Unlike in the previous examples, `children` is a partially applied function
    // that still needs `likesPerUser` and `updateUserLikes` to return the real children.

    // However, `FancyBox` doesn't "read into" its children and just uses them in its output,
    // so we can let some kind of external system inject the missing arguments later.
    return FancyBox(children);
}

// The render output is not fully known yet because the state is not injected.
const box = FancyUserList(data.users);
// `box.children()` is a function, so we finally inject the state arguments.
const resolvedChildren = box.children(likesPerUser, updateUserLikes);
// Now we have the final render output.
const resolvedBox = {
    ...box,
    children: resolvedChildren
};