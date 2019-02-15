import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        // position: 'absolute',
        bottom: 0
    },
};

function Footer(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            this is footer
        </div >
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
