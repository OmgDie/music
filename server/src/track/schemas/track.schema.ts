import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types,  } from 'mongoose';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  listens: number;

  @Prop()
  text: string;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({type: [{type: Types.ObjectId, ref: 'Comment'}]})
  comments: Types.ObjectId[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
