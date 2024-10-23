"use client";

import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const MenuBar = ({ pages, onPageSelect }) => {
  return (
    <Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page.title}>
            <ListItemButton onClick={() => onPageSelect(page)}>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuBar;
