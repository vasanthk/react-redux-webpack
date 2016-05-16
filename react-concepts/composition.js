/**
 * To achieve truly reusable features, it is not enough to simply reuse leaves and build new containers for them.
 * You also need to be able to build abstractions from the containers that compose other abstractions.
 * The way I think about "composition" is that they're combining two or more different abstractions into a new one.
 */

function FancyBox(children) {
    return {
        borderStyle: '1px solid blue',
        children: children
    };
}

function UserBox(user) {
    return FancyBox([
        'Name: ',
        NameBox(user.firstName + ' ' + user.lastName)
    ]);
}

