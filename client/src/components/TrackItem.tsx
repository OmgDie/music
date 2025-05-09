import { ITrack } from '@/types/track';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { Card, Grid, IconButton, } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface ITrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<ITrackItemProps> = ({track, active = false}) => {
    return (
            <Card 
                style={{ 
                    width: '910px', 
                    margin: '10px', 
                    padding: '10px', 
                    backgroundColor: active ? '#f0f0f0' : '#fff' 
                }}
            >
                <IconButton>
                    {active
                        ? <Pause />
                        : <PlayArrow />
                    }
                </IconButton>
                <img src={track.picture} alt={track.name} style={{ width: '100px', height: '100px' }} />
                <Grid container direction='column' style={{ width: 200, margin: '0, 20px'}}>
                    <Link href={`/tracks/${track._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontSize: 20, fontWeight: 'bold' }}>{track.name}</div>
                    </Link>
                    <div style={{fontSize: 12, color: 'blue'}}>{track.artist}</div>
                </Grid>
                {active && <div>02:42 / 03:20</div>}
                <IconButton style={{ marginLeft: 'auto' }}>
                    <Delete />
                </IconButton>
            </Card>

    );
};

export default TrackItem;