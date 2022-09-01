function setProto(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

const AbstractProduct = function () {
    if (this.prototype === undefined) {
        throw new Error("Trying to create the instance of an abstract class");
    }
    this.ID;
    this.name;
    this.description;
    this.price;
    this.quantity;
    this.images;
    this.reviews;
    this.date;

    // METHODS 
    this.getReviewByID = function (ID) {
        if (this.reviews === undefined || this.reviews.length < 1) {
            return null;
        }
        for (let i of this.reviews) {
            if (i.getID == ID) {
                return review;
            }
        }
    }

    this.getImage = function (param) {
        if (this.images === undefined || this.images.length === 0) {
            return null;
        }

        if (param === undefined && this.images.length > 0) {
            return this.images[0];
        }

        for (let i of this.images) {
            if (i === param) {
                return i;
            }
        }
    }

    this.addSize = function (size) {
        this.sizes = this.sizes ?? [];
        this.sizes.push(size);
    }

    this.deleteSize = function (key) {
        if (this.sizes !== undefined && this.sizes !== null && this.sizes.includes(key)) {
            this.sizes.splice(this.sizes.indexOf(key), 1);
        }
    }

    this.addReview = function (review) {
        this.reviews = this.reviews ?? [];
        this.reviews.push(review);
    }

    this.deleteReview = function (ID) {
        let indexByID;

        for (let i = 0, currentID; i < reviews.length && currentID === undefined; i++) {
            currentID = reviews[i].getID();
            if (currentID === ID) {
                indexByID = currentID;
            }
        }

        if (indexByID !== undefined) {
            this.reviews.splice(this.reviews.indexOf(ID), 1);
        }
    }


    this.getAverageRating = function () {
        let average = 0;
        for (let i = 0, limit = this.reviews.length; i < limit; i++) {
            average += this.reviews[i].getRating();
        }
        return (average / this.reviews.length);
    }

    /**
     * If search contains * in the end  =
     * @param {Product[]} products is array of {@link Product}
     * @param {string} search query
     * @returns {Product[]} all values matched with search
     */
    this.searchProducts = function (products, search) {
        function maskSearch(text) {
            return text.includes(String(search).substring(0, search.length - 1)); // mask without *
        }

        function strictSearch(text) {
            return search === text;
        }

        let isMask = search.charAt(search.length - 1) === "*";
        let searchType = ((search.length > 1) && isMask) ? maskSearch : strictSearch;

        let matched = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i] !== undefined && products[i] !== null) {
                let name = products[i].getName();
                let description = products[i].getDescription();

                if (name !== undefined && name !== null && searchType(products[i])) {
                    matched.push(products[i]);
                }

                if (!matched.includes(products[i]) &&
                    description !== undefined &&
                    description !== null &&
                    searchType(products[i])
                ) {
                    matched.push(products[i]);
                }
            }
        }
        return matched;
    }
}

const Clothes = function () {
    this.material = arguments.material;
    this.color = arguments.color;
}
setProto(Clothes, AbstractProduct);

const Electronics = function () {
    this.warranty = arguments.warranty;
    this.power = arguments.power;
}
setProto(Electronics, AbstractProduct);


let shirt = new Clothes()
console.log("shirt.name:", shirt.name);
shirt.name = "green polo"
console.log("shirt:", shirt);
console.log("shirt proto:", Object.getPrototypeOf(shirt));
console.log("shirt.name:", shirt.name);


// console.log("\n\nthere must be error:");
// let wrongProduct = new AbstractProduct();