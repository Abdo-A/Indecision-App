'use strict';

var content = '';

var onHideShow = function onHideShow() {
    if (content) {
        content = '';
    } else {
        content = 'This is the content';
    }
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
    var visitbleTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onHideShow },
            content ? 'Hide details' : 'Show details'
        ),
        content && React.createElement(
            'p',
            null,
            content
        )
    );

    ReactDOM.render(visitbleTemplate, appRoot);
};
render();
