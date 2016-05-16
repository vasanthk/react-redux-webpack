/**
 * It turns out that it is kind of a pain in the a** to pass every little value you might need through several levels of abstractions.
 * It is kind of nice to sometimes have a shortcut to pass things between two abstractions without involving the intermediates.
 * In React we call this "context".
 * Sometimes the data dependencies don't neatly follow the abstraction tree.
 * For example, in layout algorithms you need to know something about the size of your children before you can completely fulfill their position.
 * Now, this example is a bit "out there". I'll use Algebraic Effects as proposed for ECMAScript.
 * If you're familiar with functional programming, they're avoiding the intermediate ceremony imposed by monads.
 */

function ThemeBorderColorRequest() { }

function FancyBox(children) {
    // This will propagate through the caller stack, like "throw"
    const color = raise new ThemeBorderColorRequest();
    return {
        borderWidth: '1px',
        borderColor: color,
        children: children
    };
}

function BlueTheme(children) {
    return try {
        children();
    } catch effect ThemeBorderColorRequest -> [, continuation] {
        // However, unlike "throw", we can resume the child function and pass some data
        continuation('blue');
    }
}

function App(data) {
    return BlueTheme(
        FancyUserList.bind(null, data.users)
    );
}