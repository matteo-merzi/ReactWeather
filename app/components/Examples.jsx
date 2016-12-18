var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few examples location to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Verona'>Verona, Italy</Link>
                </li>
                <li>
                    <Link to='/?location=New York'>New York, NY</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
