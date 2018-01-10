import React from "react";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import WidgetsIcon from "material-ui-icons/Widgets";
import FaceIcon from "material-ui-icons/Face";
import SecurityIcon from "material-ui-icons/Security";
import StoreIcon from "material-ui-icons/Store";

const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    boxShadow: "0 -1px 3px 1px rgba(0, 0, 0, .1)"
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Learn"
          value="learn"
          icon={<WidgetsIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<FaceIcon />}
        />
        <BottomNavigationAction
          label="Clubs"
          value="clubs"
          icon={<SecurityIcon />}
        />
        <BottomNavigationAction
          label="Shop"
          value="shop"
          icon={<StoreIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(LabelBottomNavigation);
