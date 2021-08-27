import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
    StepConnector
  } from '@material-ui/core'
import { colors } from '../../theme/variables';
import Check from '@material-ui/icons/Check'


export const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: colors.tuquoise,
        },
    },
    completed: {
        '& $line': {
            borderColor: colors.tuquoise,
        },
    },
    line: {
        borderColor: colors.rose,
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: colors.violetFoncer,
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: colors.rose,
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: colors.tuquoise,
        zIndex: 1,
        fontSize: 18,
    },
});

export const QontoStepIcon = (props) => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
        className={clsx(classes.root, {
            [classes.active]: active,
        })}
        >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};