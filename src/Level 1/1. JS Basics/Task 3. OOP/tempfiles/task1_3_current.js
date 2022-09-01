function AbstractProduct(ID, name, description, price, quantity, images, reviews, date) {
    let newProduct = Object.create(abstractProductConstructor);
    newProduct.ID = ID;
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.quantity = quantity;
    newProduct.images = images;
    newProduct.reviews = reviews;
    newProduct.date = date;
    return newProduct;
}

let abstractProductConstructor = {
    getReviewByID : function (ID) {
        if (this.reviews === undefined || this.reviews.length < 1) return null;
        for (let i of this.reviews) {
            if (i.getID === ID) return i;
        }
    },

    getImage : function (param) {
        if (this.images === undefined || this.images.length === 0) return null;
        if (param === undefined && this.images.length > 0) return this.images[0];
        for (let i of this.images) {
            if (i === param) return i;
        }
    },

    addSize : function (size) {
        if (this.sizes === undefined || this.sizes == null) this.sizes = [];
        this.sizes.push(size);
    },

    deleteSize : function (key) {
        if (this.sizes !== undefined && this.sizes !== null && this.sizes.includes(key)) {
            this.sizes.splice(this.sizes.indexOf(key), 1);
        }
    },

    addReview : function (review) {
        this.reviews = this.reviews ?? [];
        this.reviews.push(review);
    },

    deleteReview : function (ID) {
        let indexByID;
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].getID() === ID) indexByID = this.reviews[i].getID();
        }
        if (indexByID !== undefined) this.reviews.splice(this.reviews.indexOf(ID), 1);
    },

    getAverageRating : function () {
        let allRatingsSum = 0;
        for (let i = 0; i < this.reviews.length; i++) {
            allRatingsSum += this.reviews[i].getRating();
        }
        return (allRatingsSum / this.reviews.length);
    },

    searchProducts : function (products, search) {
        function maskSearch(text) {
            return text.includes(String(search).substring(0, search.length - 1)); // mask without *
        }

        function strictSearch(text) { return search === text; }

        let isMask = search.charAt(search.length - 1) === "*";
        let searchType = ((search.length > 1) && isMask) ? maskSearch : strictSearch;

        let matched = [];
        for (let i = 0; i < products.length; i++) {
            let p = products[i];// product
            if (p !== undefined && p !== null) {

                if (p.name && searchType(p)) {
                    matched.push(p);
                }

                if (!matched.includes(p) && p.description && searchType(p)) {
                    matched.push(p);
                }
            }
        }
        return matched;
    }


}


function Clothes(ID, name, description, price, quantity, images, reviews, date, color, material) {
    let newClothes = AbstractProduct(ID, name, description, price, quantity, images, reviews, date);
    Object.setPrototypeOf(newClothes, clothesConstructor);
    newClothes.color = color;
    newClothes.material = material;
    return newClothes;
}

let clothesConstructor = {
    // write functions here
}


Object.setPrototypeOf(clothesConstructor, abstractProductConstructor);
const shirt = new Clothes();
console.log(shirt)
// shirt.myPrice();
// shirt.myColor();
