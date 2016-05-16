/**
 * You can't fit a complex UI in a single function though.
 * It is important that UIs can be abstracted into reusable pieces that don't leak their implementation details.
 * Such as calling one function from another.
 */

function FancyUserBox(user) {
    return {
        borderStyle: '1px solid blue',
        childContent: [
            'Name: ',
            // Embed the render output of `NameBox`.
            NameBox(user.firstName + ' ' + user.lastName)
        ]
    };
}

//{ firstName: 'Vasa', lastName: 'K' } ->
//{
//    borderStyle: '1px solid blue',
//    childContent: [
//      'Name: ',
//      { fontWeight: 'bold', labelContent: 'Vasa K' }
//    ]
//};