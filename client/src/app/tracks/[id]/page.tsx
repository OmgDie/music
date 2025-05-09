import React from 'react';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';

const TrackPage = () => {
    const track: ITrack = { _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'text 1', listens: 100, picture: 'picture1.jpg', audio: 'audio1.mp3', comments: [] }
    
    return (
        <>
            <Button
                variant='outlined'
                style={{fontSize: 17}}
            >
                <Link href='/tracks'>К списку треков</Link>
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200} />
                <div style={{marginLeft: '30px'}}>
                    <h1>Название : {track.name}</h1>
                    <h1>Исполнитель : {track.artist}</h1>
                    <h1>Текст : {track.text}</h1>
                    <h1>Слушали: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Текст песни</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    label='Ваше имя'
                    fullWidth
                />
                <TextField
                    label='Ваш комментарий'
                    multiline
                    rows={4}
                    fullWidth
                />
                <Button style={{marginTop: '10px'}} variant='outlined'>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TrackPage;