import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectEmployeeData } from '../selectors';
import { setEmployeeData } from '../actions';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 10,
  },
  parentDiv: {
    padding: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  rootGrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textInput: {
    width: '100%',
  },
}));

export function EmployeeFormCard(props) {
  const classes = useStyles();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const { employee, dispatchSetEmployeeData } = props;

  const handleFirstNameChange = event => {
    setFirstname(event?.target?.value);
  };
  const handleLastNameChange = event => {
    setLastname(event?.target?.value);
  };

  const handleFormSubmit = () => {
    const newEmployees = [
      ...employee,
      { firstName: firstname, lastName: lastname },
    ];
    dispatchSetEmployeeData(newEmployees);
    setFirstname('');
    setLastname('');
  };

  return (
    <div className={classes.parentDiv}>
      <div>
        <Card className={classes.root} elevation={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent style={{ width: '100%' }}>
            <div className={classes.rootGrid}>
              <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4} sm={4} lg={4}>
                    <TextField
                      id="first-name"
                      label="First name"
                      variant="outlined"
                      size="small"
                      required
                      className={classes.textInput}
                      value={firstname}
                      onChange={handleFirstNameChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4} lg={4}>
                    <TextField
                      id="last-name"
                      label="Last name"
                      variant="outlined"
                      size="small"
                      required
                      className={classes.textInput}
                      value={lastname}
                      onChange={handleLastNameChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4} lg={4}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className={classes.parentDiv}>
        {employee.map(emp => (
          <div className={classes.parentDiv}>
            <Card>
              <CardHeader
                title={`${emp.firstName} ${emp.lastName}`}
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

EmployeeFormCard.propTypes = {
  employee: PropTypes.array.isRequired,
  dispatchSetEmployeeData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employee: selectEmployeeData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchSetEmployeeData: data => dispatch(setEmployeeData(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(EmployeeFormCard);
