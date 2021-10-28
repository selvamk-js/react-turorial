import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useInjectReducer } from 'utils/injectReducer';
import EmployeeFormCard from './components/EmployeeFormCard';

import reducer from './reducer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  padding: {
    padding: '10px',
  },
}));

const key = 'employee';

export default function Employee() {
  useInjectReducer({ key, reducer });
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Employee Page</title>
        <meta name="description" content="Just Employee page" />
      </Helmet>
      <div className={classes.root}>
        <AppBar position="static" variant="elevation">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <EmployeeFormCard />
      </div>
    </div>
  );
}
