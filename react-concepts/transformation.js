/**
 * The core premise for React is that UIs are simply a projection of data into a different form of data.
 * The same input gives the same output. A simple pure function.
 */

function NameBox(name) {
    return { fontWeight: 'bold', labelContent: name };
}

//'Sebastian Markbåge' ->
//{ fontWeight: 'bold', labelContent: 'Sebastian Markbåge' };