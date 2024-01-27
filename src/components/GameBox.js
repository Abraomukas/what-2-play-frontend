import React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function GameBox(props) {
	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					overflow: 'hidden',
					borderRadius: '12px',
					boxShadow: 1,
					fontWeight: 'bold',
				}}>
				<Box
					component='img'
					sx={{
						height: { xs: 'auto', md: 167 },
						width: { xs: 'auto', md: 250 },
						maxWidth: '100%',
						objectFit: 'cover',
					}}
					alt='Returnal'
					src='./images/returnal.webp'
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: { xs: 'center', md: 'flex-start' },
						m: 3,
						minWidth: { md: 350 },
					}}>
					<Box component='span' sx={{ color: 'primary.main', fontSize: 22 }}>
						Returnal
					</Box>
					<Box
						sx={{
							mt: 1.5,
							p: 0.5,
							backgroundColor: (theme) =>
								alpha(theme.palette.primary.main, 0.1),
							borderRadius: '5px',
							color: 'primary.main',
							fontWeight: 'medium',
							display: 'flex',
							fontSize: 12,
							alignItems: 'center',
							'& svg': {
								fontSize: 21,
								mr: 0.5,
							},
						}}>
						<ErrorOutlineIcon />
						Shooters
					</Box>
				</Box>
			</Box>
		</div>
	);
}
export default GameBox;
