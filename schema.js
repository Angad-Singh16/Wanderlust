const joi = require('joi');

module.exports.listingSchema = joi.object({
        listing: joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            price: joi.number().required(),
            location: joi.string().required(),
            image: joi.string().allow("", null).min(0),
            country: joi.string().required(),
        }).required()
    });
        

// Review schema
module.exports.reviewSchema = joi.object({
    review: joi.object({
        comment: joi.string().required(),
        rating: joi.number().min(1).max(5).required(),
    }).required()
});