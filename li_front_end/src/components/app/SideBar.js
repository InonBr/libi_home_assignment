import React, { useContext, useEffect, useState } from 'react';
import { MovieDataContext } from '../../context/MovieDataContext';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Cookies from 'universal-cookie';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: 'rgb(240, 240, 240)',
    },
  })
);

const SideBar = () => {
  const { movieData } = useContext(MovieDataContext);
  const cookies = new Cookies();
  const classes = useStyles();
  const [categorys, setCategorys] = useState(['all movies']);

  useEffect(() => {
    setCategorys(['all movies']);

    movieData.categorys.forEach((category) => {
      setCategorys((categorys) => [...categorys, category.category]);
    });
  }, [movieData]);

  const handleLogout = () => {
    cookies.remove('userToken', { path: '/' });
    cookies.remove('userToken', { path: '/secure' });
    window.location = '/login';
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div>
          <h3>Welcome Admin</h3>
        </div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button onClick={() => handleLogout()}>
            <ListItemText primary='Logout' />
          </ListItem>
          <ListItem
            button
            onClick={() => (window.location = '/secure/add_movie')}
          >
            <ListItemText primary='Add Movie' />
          </ListItem>
        </List>
        <List>
          {categorys.map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => (window.location = `/secure/${text}`)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideBar;
