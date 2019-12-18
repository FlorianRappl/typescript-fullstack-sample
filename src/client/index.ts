import { hydrate } from 'react-dom';
import { createView } from './createView';

hydrate(createView(), document.querySelector('#app'));
