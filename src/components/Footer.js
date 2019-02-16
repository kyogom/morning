import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from '../theme/theme';

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'left',
        padding: 8
    },
    signature: {
        fontSize: 12,
        marginLeft: 12
    },
    links: {
        margin: 12,
    }
};
function Footer(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div>
                <a href="https://goo.gl/forms/2BMMIepHqZB0ULk22" target="_blank" className={classes.links}>お問い合わせ</a>
                <a href="#">プライバシーポリシー（作成中）</a>
            </div>
            <span className={classes.signature}>
                Created by Kyogo Mochida@Irie-dev
                </span>
            <div>

            </div>
        </div >
    );
}

export default withStyles(styles)(Footer);
