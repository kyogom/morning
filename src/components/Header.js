import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '../theme/GithubIcon';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },

};

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
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
        </div >
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
