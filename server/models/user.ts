import {Schema, model} from 'mongoose';

export interface User {
	// TODO: add properties
}

const schema = new Schema({});

export const User = model('User', schema);
