/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Perspective from './perspective';

const root = document.getElementById('perspective');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Perspective />, root!);
