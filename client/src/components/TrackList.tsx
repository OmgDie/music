import { ITrack } from '@/types/track';
import { Box, Grid } from '@mui/material';
import React from 'react';
import TrackItem from './TrackItem';

interface ITrackListProps {
    tracks: ITrack[];
}

const TrackList: React.FC<ITrackListProps> = ({tracks}) => {
    return (
        <Grid container direction={'column'} alignItems='flex-start' justifyContent='center'>
            <Box p={2}>
                {tracks.map(track => 
                    <TrackItem
                        key={track._id} 
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;