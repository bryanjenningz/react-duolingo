import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import MoreVert from "material-ui-icons/MoreVert";
import Whatshot from "material-ui-icons/Whatshot";
import Menu, { MenuItem } from "material-ui/Menu";

const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1,
    textAlign: "center"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class TopAppBar extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="default"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="default" className={classes.flex}>
              Japanese
            </Typography>
            <IconButton>
              <Whatshot />
            </IconButton>
            <div>
              <IconButton
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="default"
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                <MenuItem onClick={this.handleClose}>Progress Sharing</MenuItem>
                <MenuItem onClick={this.handleClose}>Feedback</MenuItem>
                <MenuItem onClick={this.handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopAppBar);
