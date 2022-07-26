import * as methods from './AbstractProductMethods.js'

export const AbstractProduct = function () {
    if (this.prototype === undefined) {
        throw new Error("Trying to create the instance of an abstract class");
    }
    this.ID = undefined;
    this.name = undefined;
    this.description = undefined;
    this.price = undefined;
    this.quantity = undefined;
    this.images = undefined;
    this.reviews = undefined;
    this.date = undefined;

    // methods
    this.getReviewByID = methods.getReviewByID;
    this.getImage = methods.getImage;
    this.addSize = methods.addSize;
    this.deleteSize = methods.deleteSize;
    this.addReview = methods.addReview;
    this.deleteReview = methods.deleteReview;
    this.getAverageRating = methods.getAverageRating;
    this.searchProducts = methods.searchProducts;
}


