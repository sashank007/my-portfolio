import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

class LongTextSnackbar extends React.Component {
  action() {
    return (
      <Button color="secondary" size="small" onClick={this.closeSnack}>
        close{" "}
      </Button>
    );
  }

  closeSnack = () => {
    console.log("close snack");
    this.props.closeSnack(true);
  };
  render() {
    console.log("props ---", this.props);
    const { classes } = this.props;
    return (
      <div>
        <SnackbarContent
          className={classes.snackbar}
          message={this.props.displayMessage}
          action={this.action()}
        />{" "}
      </div>
    );
  }
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LongTextSnackbar);
