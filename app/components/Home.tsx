import React from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import { Button } from '@blueprintjs/core';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
      </div>
      <div className="row">
        <div className="col-xs">
          <div className="box">
            <Button intent="success" text="button content" />
          </div>
        </div>
        <div className="col-xs">Test</div>
      </div>
    </>
  );
}
