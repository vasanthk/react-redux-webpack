/**
 * To achieve truly reusable features, it is not enough to simply reuse leaves and build new containers for them.
 * You also need to be able to build abstractions from the containers that compose other abstractions.
 * The way I think about "composition" is that they're combining two or more different abstractions into a new one.
 */

function FancyBox(children) {
    // `FancyBox` doesn't need to know what's inside it.
    // Instead, it accepts `children` as an argument.
    return {
        borderStyle: '1px solid blue',
        children: children
    };
}

function UserBox(user) {
    // Now we can put different `children` inside `FancyBox` in different parts of UI.
    // For example, `UserBox` is a `FancyBox` with a `NameBox` inside.
    return FancyBox([
        'Name: ',
        NameBox(user.firstName + ' ' + user.lastName)
    ]);
}

function MessageBox(message) {
    // However a `MessageBox` is a `FancyBox` with a message.
    return FancyBox([
        'You received a new message: ',
        message
    ]);
}

