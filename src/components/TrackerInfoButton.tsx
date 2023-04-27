import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { IconButton } from '@mui/material';
import { Player } from './Player';

export const TrackerInfoButton = ({ player }: { player: Player }) => {
  const trackerLink: string = `https://tracker.gg/valorant/profile/riot/${player.riotID}%23${player.tagline}/overview`
  return (
    <>
      <IconButton href={trackerLink} color="inherit" target="_blank" rel="noreferrer"><QueryStatsIcon /></IconButton>
    </>
  )
}

export default TrackerInfoButton;