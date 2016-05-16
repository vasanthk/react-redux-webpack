/**
 * State:
 * A UI is NOT simply a replication of server / business logic state.
 * There is actually a lot of state that is specific to an exact projection and not others.
 * For example, if you start typing in a text field. That may or may not be replicated to other tabs or to your mobile device.
 * Scroll position is a typical example that you almost never want to replicate across multiple projections.
 * We tend to prefer our data model to be immutable.
 * We thread functions through that can update state as a single atom at the top.
 */

function FancyNameBox(user, likes, onClick) {
    return FancyBox([
        'Name: ', NameBox(user.firstName + ' ' + user.lastName),
        'Likes: ', LikeBox(likes),
        LikeButton(onClick)
    ]);
}

// Implementation Details
var likes = 0;
function addOneMoreLike() {
    likes++;
    rerender();
}

// Init
FancyNameBox(
    {firstName: 'Sebastian', lastName: 'Markbåge'},
    likes,
    addOneMoreLike
);

// NOTE: These examples use side-effects to update state.
// My actual mental model of this is that they return the next version of state during an "update" pass.