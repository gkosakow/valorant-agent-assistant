import { useState, MouseEvent } from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Players from './Players';
import GroupsIcon from '@mui/icons-material/Groups';

export default function TeamPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick} startIcon={<GroupsIcon />}>
                Roster
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                PaperProps={{ elevation: 3, sx: { borderRadius: 4 } }}
            >
                <Players />
            </Popover>
        </div>
    );
}