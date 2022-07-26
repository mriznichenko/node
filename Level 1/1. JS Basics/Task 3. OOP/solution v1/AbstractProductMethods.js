export function getReviewByID(ID) {
    if ((this.reviews ?? []).length < 1) return null;
    for (let review of this.reviews) if (review.getID === ID) return review;
}

export function getImage(param) {
    if ((this.images ?? []).length === 0) return;
    if (param === undefined) return this.images[0];
    for (let image of this.images) if (image === param) return image;
}

export function addSize(size) {
    (this.sizes = this.sizes ?? []).push(size);
}

export function deleteSize(key) {
    if ((this.sizes ?? []).includes(key)) this.sizes.splice(this.sizes.indexOf(key), 1);
}

export function addReview(review) {
    (this.reviews = this.reviews ?? []).push(review);
}

export function deleteReview(ID) {
    for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].getID() === ID) {
            this.reviews.splice(this.reviews.indexOf(ID), 1);
            break;
        }
    }
}

export function getAverageRating() {
    if ((this.reviews ?? []).length < 1) return 0;
    let average = 0;
    for (let i = 0; i < this.reviews.length; i++) average += this.reviews[i].getRating();
    return average / this.reviews.length;
}

/**
 * If search contains * in the end  =
 * @param {Product[]} products is array of {@link Product}
 * @param {string} search query
 * @returns {Product[]} all values matched with search
 */
export function searchProducts(products, search) {
    const maskSearch = text => text.includes(String(search).substring(0, search.length - 1)); // mask without *
    const strictSearch = text => search === text;

    let isMask = search.charAt(search.length - 1) === "*";
    let searchType = ((search.length > 1) && isMask) ? maskSearch : strictSearch;

    let matches = [];
    for (let i = 0, p; i < products.length; i++) {
        p = products[i];// product
        if ((p ?? 0) && searchType(p) && (p.getName() ?? 0) && !matches.includes(p)) matches.push(p);
    }
    return matches;
}