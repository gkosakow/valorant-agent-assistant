import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { IconButton } from '@mui/material';
import { Player } from './Player';

export const TrackerInfoButton = ({ player }: { player: Player }) => {
  const trackerLink: string = `https://tracker.gg/valorant/profile/riot/${player.riotID}%23${player.tagline}/overview`
  return (
    <>
      <IconButton style={{ backgroundColor: "transparent" }} href={trackerLink} color="inherit" target="_blank" rel="noreferrer"><QueryStatsIcon sx={{ "&:hover": { filter: 'drop-shadow(0px 0px 5px white)' } }} /></IconButton>
    </>
  )
}

export default TrackerInfoButton;