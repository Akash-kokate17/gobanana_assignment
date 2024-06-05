import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Container, List, ListItem, ListItemText, CircularProgress, Grid } from '@mui/material';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
        setFilteredItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  return (
    <Container maxWidth="md">
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={e => setSearch(e.target.value)}
      />
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <List>
          {filteredItems.map(item => (
            <ListItem key={item.id} alignItems="flex-start">
              <ListItemText
                primary={item.title}
                secondary={item.body}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ItemList;
