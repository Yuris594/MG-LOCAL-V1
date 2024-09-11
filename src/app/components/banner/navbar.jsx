import { Box,  List,  ListItem,  ListItemButton,  ListItemIcon,  ListItemText, } from "@mui/material";
import Link from "next/link";
  
  const navbar = ({ page }) => {
    return (
      <Box>
          <List>
            {page.map((link) => (
              <ListItem
                disablePadding
                key={link.title}>
                  
                <ListItemButton
                  LinkComponent={Link}
                  href={link.url}
                  onClick={link.onClick}>

                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText>{link.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Box>
    );
  };
  
  export default navbar;