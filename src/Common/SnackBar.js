import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const action = (
  <Button color="secondary" size="small" onClick={closeSnack}>
    close
  </Button>
);
function closeSnack() {
  console.log("close snack");
  this.props.closeSnack(true);
}
const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

class LongTextSnackbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SnackbarContent
          className={classes.snackbar}
          message={this.props.displayMessage}
          action={action}
        />
      </div>
    );
  }
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LongTextSnackbar);
