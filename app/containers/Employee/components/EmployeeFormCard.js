import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
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
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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

export default function EmployeeFormCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFirstNameChange = event => {
    console.log(event?.target?.value);
    setFirstname(event?.target?.value);
  };
  const handleLastNameChange = event => {
    setLastname(event?.target?.value);
  };

  return (
    <div className={classes.parentDiv}>
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
              </Grid>
            </form>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
