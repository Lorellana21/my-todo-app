import PropTypes from "prop-types";
import AppCard from "../AppCard";

const Task = ({ task, description, title, onDeleteTask }) => (
  <AppCard
    title={title}
    description={description}
    onDelete={() => onDeleteTask(task)}
  ></AppCard>
);

Task.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDeleteTask: () => {},
};

export default Task;