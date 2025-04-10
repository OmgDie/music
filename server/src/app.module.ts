import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
        MongooseModule.forRoot('mongodb+srv://dimkapwnz228:mJb4C9Ox50Po1Ywh@clustermusic.831yd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMusic'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {

}