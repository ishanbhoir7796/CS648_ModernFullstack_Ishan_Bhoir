let emma = 'Emma Wilson';
let noah = 'Noah Carter';
let olivia = 'Olivia Brown';
let liam = 'Liam Johnson';
let ava = 'Ava Martinez';
let ethan = 'Ethan Davis';

const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{emma}</li>
        <li>{noah}</li>
        <li>{olivia}</li>
        <li>{liam}</li>
        <li>{ava}</li>
        <li>{ethan}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('root'))