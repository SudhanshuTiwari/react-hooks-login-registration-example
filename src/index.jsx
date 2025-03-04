import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store , configureFakeBackend} from './utils';
import { App } from './App';

// setup fake backend
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);