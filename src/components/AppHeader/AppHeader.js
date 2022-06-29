import PropTypes from "prop-types";
import styles from "./AppHeader.module.css";

const AppHeader = (props) => {
  return (
    <header className={styles.AppHeader}>
      <h1>{props.title}</h1>
      <p>{props.counter} Tareas</p>
    </header>
  );
};

AppHeader.defaultProps = {
  counter: 0,
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AppHeader;