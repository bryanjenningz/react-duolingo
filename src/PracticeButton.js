import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import ModeEditIcon from "material-ui-icons/ModeEdit";
import DeleteIcon from "material-ui-icons/Delete";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "fixed",
    right: 20,
    bottom: 75
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button fab color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
