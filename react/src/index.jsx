import React from 'react';
import ReactDOM from 'react-dom/client';

class ReactComponent extends React.Component {
    render() {
        return (<h1>R E A C T</h1>);
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ReactComponent />);