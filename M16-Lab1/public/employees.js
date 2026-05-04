let emma = 'Emma Wilson';
let noah = 'Noah Carter';
let olivia = 'Olivia Brown';
let liam = 'Liam Johnson';
let ava = 'Ava Martinez';
let ethan = 'Ethan Davis';

const element = React.createElement(
    "ul", {
        style: {
            color: 'blue',
            fontSize: '24px'
        }
    },
    React.createElement("li", null, emma),
    React.createElement("li", null, noah),
    React.createElement("li", null, olivia),
    React.createElement("li", null, liam),
    React.createElement("li", null, ava),
    React.createElement("li", null, ethan)
);

ReactDOM.render(element, document.getElementById('root'));