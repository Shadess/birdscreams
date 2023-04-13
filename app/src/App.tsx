import type { Component } from 'solid-js';

import logo from './assets/birdscream.gif';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class={styles.title}>Birdscreams</p>
      </header>
    </div>
  );
};

export default App;
