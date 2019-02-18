import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '../theme/GithubIcon';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TableChart from '@material-ui/icons/TableChart';
import ShowChart from '@material-ui/icons/ShowChart';

// import MenuIcon from '@material-ui/icons/Menu';

const appBar = {
    height: 56
};
const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1,
        lineHeight: 0
    },
    toolBar: {
        height: appBar.height
    },
    sidelist: {
        marginTop: appBar.height + 20,
    },
    drawer: {
        zIndex: 0
    }
};

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolBar}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography className={classes.grow}>
                        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="App-logo" />
                    </Typography>
                    <IconButton className={classes.button} aria-label="Github" href="https://github.com/kyogom/morning" target="_blank">
                        <GithubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
                <List className={classes.sidelist}>
                    <ListItem button key={'lineChart'}>
                        <ListItemIcon><ShowChart /></ListItemIcon>
                    </ListItem>
                    {/* <ListItem button key={'table'}>
                        <ListItemIcon><TableChart /></ListItemIcon>
                    </ListItem> */}
                </List>
            </Drawer>
        </div >
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
