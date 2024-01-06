'use client'
import { Box, ListItem, ListItemButton, ListItemText, ListItemIcon , List } from "@mui/material";
import Drawer from "@mui/material";
import Button from "@mui/material";
import Divider from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

export const  drawerList =(anchor)=>(
    <Box
    sx={{ width: anchor === 'top' || anchor=== 'bottom' ? 'auto' : 250}}
    role='presentation'>
        <List>
            {['Book your Ride' , 'Rate card' , 'Support'].map((text, index)=>(
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>            
                ))}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary ={'Your Ride'}/>
                    </ListItemButton>
                </ListItem>
        </List>
    </Box>
)