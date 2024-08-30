import { Box,  List,  ListItem,  ListItemButton,  ListItemIcon,  ListItemText, } from "@mui/material";
import Link from "next/link";
  
  const navbar = ({ page }) => {
    return (
      <Box sx={{ width: 250 }}>
        <nav>
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
        </nav>
      </Box>
    );
  };
  
  export default navbar;