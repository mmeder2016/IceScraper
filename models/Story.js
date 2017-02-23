// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a StorySchema with the Schema class
var StorySchema = new Schema({
    headline: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    comments: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Story model
        ref: "Comment"
    }]
});

// Make a Story model with the StorySchema
varStory = mongoose.model("Story", StorySchema);

// Export the Story model
module.exports = Story;