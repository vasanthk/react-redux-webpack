/**
 * Most UIs are some form of lists that then produce multiple different values for each item in the list. This creates a natural hierarchy.
 * To manage the state for each item in a list we can create a Map that holds the state for a particular item.
 */

function UserList(users, likesPerUser, updateUserLikes) {
    return users.map(user => FancyNameBox(
        user,
        likesPerUser.get(user.id),  // get() is a Map() method (ES6)
        () => updateUserLikes(user.id, likesPerUser.get(user.id) + 1)
    ));
}

// The Map object is a simple key/value map - Part of ES6
var likesPerUser = new Map();
function updateUserLikes(id, likeCount) {
    likesPerUser.set(id, likeCount); // set() is a Map() method (ES6)
    rerender();
}

UserList(data.users, likesPerUser, updateUserLikes);

// NOTE: We now have multiple different arguments passed to FancyNameBox.
// That breaks our memoization because we can only remember one value at a time. More on that below.