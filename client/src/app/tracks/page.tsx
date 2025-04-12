import { Button, Card, Grid } from '@mui/material';
import MainLayout from "../layouts/MainLayout";
import Link from 'next/link';
import { ITrack } from '@/types/track';
import TrackList from '@/components/TrackList';

export default function Tracks() {
  const tracks: ITrack[] = [
    { _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'text 1', listens: 100, picture: 'picture1.jpg', audio: 'audio1.mp3', comments: [] },
    { _id: '2', name: 'Track 2', artist: 'Artist 2', text: 'text 2', listens: 200, picture: 'picture2.jpg', audio: 'audio2.mp3', comments: [] },
    { _id: '3', name: 'Track 3', artist: 'Artist 3', text: 'text 3', listens: 300, picture: 'picture3.jpg', audio: 'audio3.mp3', comments: [] },
  ]
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{ width: '1000px', padding: '20px' }}>
                    <Grid container justifyContent={'space-between'} alignItems='center' padding={2}>
                        <h1>Список треков</h1>
                        <Button component={Link} href='/tracks/create'>Загрузить</Button>
                    </Grid>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
  }