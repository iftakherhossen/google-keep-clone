import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {

	return (
		<AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 0 }}>
			<Toolbar disableGutters sx={{ px: 5, pt: 0.5, borderBottom: '0.1px solid #5F6368' }}>
				<Avatar src="./logo.png" alt="logo" sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
				<Typography
					variant="h5"
					noWrap
					sx={{
						mr: 2,
						display: { xs: "none", md: "flex" },
						fontSize: 28,
						fontWeight: 700,
						color: "white",
						textDecoration: "none",
						fontFamily: "Macondo, cursive",
					}}
				>
					Keep Clone by &nbsp;<a href="https://iftakher-hossen.vercel.app/" style={{ color: 'white', textDecoration: 'none' }}>Iftakher</a>
				</Typography>

				<Avatar src="./logo192.png" alt="logo" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
				<Typography
					variant="h5"
					noWrap
					sx={{
						mr: 2,
						display: { xs: "flex", md: "none" },
						flexGrow: 1,
						fontWeight: 700,
						color: "black",
						textDecoration: "none",
						fontFamily: "Macondo, cursive",
					}}
				>
					Keep Clone by &nbsp;<a href="https://iftakher-hossen.vercel.app/" style={{ color: 'white', textDecoration: 'none' }}>Iftakher</a>
				</Typography>
			</Toolbar>
		</AppBar>          
	);
};

export default Header;