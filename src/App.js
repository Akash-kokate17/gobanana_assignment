import React from 'react';
import ItemList from './components/ItemList';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Bananas App
          </Typography>
        </Toolbar>
      </AppBar>
      <ItemList />
    </div>
  );
};

export default App;
