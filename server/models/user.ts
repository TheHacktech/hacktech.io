import {Schema, model, Model, Document} from 'mongoose';

export interface User {
	// TODO: add properties 
}

export interface Application extends User, Document{
  phoneNumber: string;
  school: string;
  major: string;
  undergrad: string;
  graduationYear: string;
  github?: string;
  linkedin?: string;
  resume: string;
  latino: boolean;
  race: string;
  gender: string;
  shirtSize: string;
  needTransportation: boolean;
  busFrom?: string;
  airport?: string;
  dietaryRestrictions: string;
  dietaryRestrictionsDetail?: string;
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  applicationStatus: string;
  decidedBy: string;
  reimbursementGiven?: boolean;
}

let application = {
  phoneNumber: String,
  school: {
    type: String,
    min: 1,
    max: 150,
  },

  major: String,

  undergrad: {
    type: String,
    enum : {
      values: "High School, Undergraduate, Graduate, Postdoc"
    }
  },

  graduationYear: {
    type: String,
    enum: {
      values: '2020 2021 2022 2023 2024+'.split(' ')
    }
  },

  github: String,
  linkedin: String,
  resume: String,

  latino: Boolean,
  race:{
    type: String,
      enum: {
        values: `Asian,
                 White,
                 Native Hawaiian or Other Pacific Islander,
                 American Indian or Alaska Native,
                 Black or African American`.split(', ')
      }
  },

  gender: {
    type: String,
      enum: {
        // Male, Female, Other, prefer not to answer
        values: "M F O P".split(' ')
      }
  },

  shirtSize: {
    type: String,
      enum: {
        values: "Small Medium Large X-Large".split(' ')
      }
  },

  needTransportation: {
    type: Boolean,
    required: true,
    default: false,
  },

  busFrom: {
    type: String,
      enum: {
        // TODO: Add others!
        values: "UCLA, UC Berkeley, Stanford, UCSD, USC".split(', ')
      }
  },

  airport: {
    type: String,
  },

  dietaryRestrictions: {
    type: Boolean,
    required: true,
    default: false,
  },

  dietaryRestrictionsDetail: {
    type: String,
  },

  Q1: {
    type: String,
    max: 1500,
  },

  Q2: {
    type: String,
    max: 1500,
  },

  Q3: {
    type: String,
    max: 1500,
  },

  Q4: {
    type: String,
    max: 1500,
  },

  applicationStatus: {
    type: String,
    enum: {
      values: "In-progress Submitted Accepted Denied Declined".split(' ')
    }
  },

  decidedBy: {
    type: String,
  },

  reimbursementGiven: {
    type: Boolean,
  }
}

const schema = new Schema({
  application : application,
});

export const User: Model<Application> = model<Application>("User", schema);
