import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

const causeError = () => {
	console.error("Test");
}

const Credits = () => (
	<div className="sidebar-box-centered">
		<Breadcrumbs className="credits" separator='|' color="hover">
			<Button sx={{ backgroundColor: 'black' }} onClick={causeError}>Test</Button>
			<Link href="" color="inherit" underline="hover">Home</Link>
			<Link href="" color="inherit" underline="hover">About</Link>
			<Link href="https://github.com/gkosakow" color="inherit" underline="hover" target="_blank" rel="noreferrer">GitHub</Link>
		</Breadcrumbs>
	</div>
)

export default Credits;