/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

const nav = (
    <nav>
        <h1>Tradlink Translations</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(

    <div>
        {nav}
        <MainContent />
    </div>,

    document.getElementById("root")
)

// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// )