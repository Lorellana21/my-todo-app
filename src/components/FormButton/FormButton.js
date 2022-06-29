import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/IconButton";

const FormButton = ({ text, onClick }) => (
  <IconButton onClick={onClick}>
    <Typography color="secondary" variant="h6">
      {text}
    </Typography>
    <AddBoxIcon color="primary"></AddBoxIcon>
  </IconButton>
);

FormButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default FormButton;