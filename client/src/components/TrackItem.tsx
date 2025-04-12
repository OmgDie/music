import { ITrack } from '@/types/track';
import { Card, } from '@mui/material';
import React from 'react';

interface ITrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<ITrackItemProps> = ({track, active = false}) => {
    return (
            <Card 
                style={{ 
                    width: '300px', 
                    margin: '10px', 
                    padding: '10px', 
                    backgroundColor: active ? '#f0f0f0' : '#fff' 
                }}
            >
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.text}</p>
                <p>Слушали: {track.listens}</p>
            </Card>

    );
};

export default TrackItem;