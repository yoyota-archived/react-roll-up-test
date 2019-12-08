var rollUpTest = (function (React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function index () {
    return React.createElement(React.Fragment, null, React.createElement("p", null, "hello world!"));
  }

  return index;

}(React));
