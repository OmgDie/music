import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track } from "./schemas/track.schema";
import { Model, ObjectId, Types } from "mongoose";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { createCommentDto } from "./dto/create-comment.dto";
import { FileService, FileType } from "src/file/file.service";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
                @InjectModel(Comment.name) private commentModel: Model<Comment>,
                private fileService: FileService) {}

    async create(dto: CreateTrackDto, picture, audio): Promise<Track>{
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const imgPath = this.fileService.createFile(FileType.IMAGE, picture);
        const createTrack = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: imgPath});
        return createTrack;
    }
    async getAll(count =  10, offset = 0): Promise<Track[]>{
        const allTracks = await this.trackModel
        .find()
        .skip(offset)
        .limit(count);
        return allTracks
    }
    async getOne(id: ObjectId): Promise<Track>{
        const getTrack = await this.trackModel
            .findById(id)
            .populate('comments');
        if (!getTrack) {
            throw new Error('Track not found');
        }
        return getTrack;
    }
    async delete(id: Types.ObjectId): Promise<Types.ObjectId>{
        const deleteTrack = await this.trackModel.findByIdAndDelete(id);
        if (!deleteTrack) {
            throw new Error('Id not found');
        }
        return deleteTrack._id as Types.ObjectId;
    }

    async addComment(dto: createCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        if (!track) {
            throw new Error('Track not found');
        }
        const { trackId, ...commentData } = dto;
        const comment = await this.commentModel.create(commentData);
        track?.comments.push(comment._id);
        await track?.save();
        return comment;
    }
    async listen(id: ObjectId): Promise<Track>{
        const track = await this.trackModel.findById(id);
        if (!track) {
            throw new Error('Track not found');
        }
        track.listens += 1;
        await track.save();
        return track;
    }
    async search(query: string): Promise<Track[]>{
        const searchTracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        });
        return searchTracks;
    }
}