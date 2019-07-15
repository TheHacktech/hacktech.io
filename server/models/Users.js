var mongoose = require('mongoose')

var application = {

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
  }

}

var profile = {
  // Caleb pls fill. I'm assuming email, name is in here.
}

var schema = mongoose.Schema({});

module.exports = mongoose.model('User', schema);
