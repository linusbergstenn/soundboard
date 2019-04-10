import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appbar:{
        background: theme.palette.primary.main
    },
    typography: {
        padding: '1rem .5rem'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        textTransform: 'uppercase',
    }
});

function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit" className={classes.typography}>
                        <NavLink to={'/'} className={classes.link}>{props.title}</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);