import React from 'react';
import ReactDOM from 'react-dom/client';

class XSearch extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name = this.getAttribute('name') as string;
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
      const root = ReactDOM.createRoot(mountPoint);
      root.render(<a href={url}>{name}</a>);
    }
  }
  customElements.define('x-search', XSearch);