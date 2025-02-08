import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

// project imports
import { SETTING_PATH } from 'config';
import { IconSettings } from '@tabler/icons-react';

// ==============================|| MAIN LOGO ||============================== //

const SettingSection = () => {
    
    const theme = useTheme();

    return (
    <>
      <Box
        sx={{
          ml: 2,
          [theme.breakpoints.down('lg')]: {
            mr: 2
          }
        }}
      >
        <NextLink href={SETTING_PATH}>
            <Avatar
            variant="rounded"
            sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                bgcolor: 'transparent',
                color: theme.palette.primary,
            }}
            color="inherit"
            >
            <IconSettings stroke={1.5} size="20px" />
            </Avatar>
        </NextLink>
       
      </Box>
    </>
  );
}

export default SettingSection;
