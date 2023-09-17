import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.flex_wrapper}>
      <a href="" className={styles.one}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Title #1</h2>
            <p>
              Fusce vulputate orci at nulla consequat, ac tincidunt quam
              ultrices.
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.two}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Title #1</h2>
            <p>
              Fusce vulputate orci at nulla consequat, ac tincidunt quam
              ultrices.
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.three}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Title #1</h2>
            <p>
              Fusce vulputate orci at nulla consequat, ac tincidunt quam
              ultrices.
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.four}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Title #1</h2>
            <p>
              Fusce vulputate orci at nulla consequat, ac tincidunt quam
              ultrices.
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.five}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Title #1</h2>
            <p>
              Fusce vulputate orci at nulla consequat, ac tincidunt quam
              ultrices.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Main;
