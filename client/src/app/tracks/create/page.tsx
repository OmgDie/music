import { Button, Card, Grid } from '@mui/material';
import React from 'react';

const createTrack = () => {
    return (
            <Grid container justifyContent={'center'}>
                <Card >
                    <Grid container justifyContent={'space-between'} alignItems='center' padding={2}>
                        <h1>Список треков</h1>
                        <Button>Загрузить</Button>
                    </Grid>
                </Card>
            </Grid>
    );
};

export default createTrack;