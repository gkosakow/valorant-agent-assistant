import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Credits = () => {
	return (
		<div className="credits-container">
			<Breadcrumbs separator='|' color="hover">
				<Link href="" color="inherit" underline="hover">Home</Link>
				<Link href="" color="inherit" underline="hover">About</Link>
				<Link href="https://github.com/gkosakow" color="inherit" underline="hover">GitHub</Link>
			</Breadcrumbs>
		</div>
	)
}

export default Credits;