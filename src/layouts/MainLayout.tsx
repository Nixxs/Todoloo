import {Box} from "@mui/material";
import {FC, ReactNode} from "react";

type MainLayoutProps = {
	children: ReactNode
}

const MainLayout:FC<MainLayoutProps> = ({children}) => {
	return (
		<Box
			sx={{
				textAlign: "center",
				padding: 4,
				display: "flex",
				flexDirection: "column"
			}}
		>
			{children}
		</Box>
	);
}

export default MainLayout;