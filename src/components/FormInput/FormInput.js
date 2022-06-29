import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const FormInput = (props) => {
  return (
    <div className="form-item">
      {props.type === "textarea" ? (
        <TextField
          color="warning"
          id={props.id}
          label={props.title}
          multiline
          required
          maxRows={4}
          inputProps={{ maxLength: 60 }}
          placeholder={props.placeholder}
          onInput={props.onInput}
        />
      ) : (
        <TextField
          color="warning"
          htmlFor={props.id}
          required
          id={props.id}
          label={props.title}
          placeholder={props.placeholder}
          onInput={props.onInput}
        />
      )}
    </div>
  );
};

FormInput.defaultProps = {
  type: "text",
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default FormInput;