/**
 * Constructs new product instance
 */
function Product() {
    /** @type {string}*/
    this.ID; // product key (unique value)

    /** @type {string}*/
    this.name;

    /** @type {string}*/
    this.description;

    /** @type {float}*/
    this.price;

    /** @type {string}*/
    this.brand;

    /** @type {string[]}*/
    this.sizes;

    /** @type {number}*/
    this.activeSize;

    /** @type {number}*/
    this.quantity;

    /** @type {Object[]}*/
    this.reviews;

    /** @type {Object[]}*/
    this.images;

    this.getReviewByID = function (ID) {
        if (this.reviews === undefined || this.reviews.length < 1) {
            return undefined;
        }

        for (let i = 0, review; i < this.reviews.length; i++) {
            review = this.reviews[i];
            if (review.getID == ID) {
                return review;
            }
        }

        return null;
    }

    this.getImage = function (param) {
        if (param === undefined && this.images.length > 0) {
            return this.images[0];
        }

        for (let i = 0, iImage; i < 0; i++) {
            iImage = this.images[i];
            if (iImage == param) {
                return iImage;
            }
        }

        return null;
    }

    this.addSize = function (size) {
        if (this.sizes === undefined || this.sizes === null) {
            this.sizes = [];
        }
        this.sizes.push(size);
    }

    this.deleteSize = function (key) {
        if (this.sizes !== undefined && this.sizes !== null && this.sizes.includes(key)) {
            this.sizes.splice(this.sizes.indexOf(key), 1);
        }
    }

    this.addReview = function (review) {
        if (this.reviews == undefined) {
            this.reviews = [];
        }
        this.reviews.push(review);
    }

    this.deleteReview = function (ID) {
        let indexByID;

        for (let i = 0, currentID; i < reviews.length && currentID === undefined; i++) {
            currentID = reviews[i].getID();
            if (currentID == ID) {
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

                if (name !== undefined && name !== null) {
                    if (searchType(products[i])) {
                        matched.push(products[i]);
                    }
                }

                if (!matched.includes(products[i]) && description !== undefined && description !== null) {
                    if (searchType(products[i])) {
                        matched.push(products[i]);
                    }
                }
            }
            return matched;
        }
    }


    /////////////////////////////////
    // PRODUCT GETTERS AND SETTERS //
    /////////////////////////////////
    this.getID = () => this.ID;
    this.setID = (ID) => this.ID = ID;

    this.getName = () => this.name;
    this.setName = (name) => this.name = String(name);

    this.getDescription = () => this.description;
    this.setDescription = (description) => this.description = String(description);

    this.getPrice = () => this.price;
    this.setPrice = (price) => this.price = parseFloat(price);

    this.getBrand = () => this.brand;
    this.setBrand = (brand) => this.brand = brand;

    this.getSizes = () => this.sizes;
    this.setSizes = (sizes) => this.sizes = sizes;

    this.getActiveSize = () => this.activeSize;
    this.setActiveSize = (activeSize) => this.activeSize = activeSize;

    this.getQuantity = () => this.quantity;
    this.setQuantity = (quantity) => this.quantity = parseInt(quantity);

    this.getDate = () => this.date;
    this.setDate = (date) => this.date = new Date(date);

    this.getReviews = () => this.reviews;
    this.setReviews = (reviews) => this.reviews = reviews;

    this.getImages = () => this.images;
    this.setImages = (images) => this.images = images;
};

function ProductReview(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    ////////////////////////////////
    // REVIEW GETTERS AND SETTERS //
    ////////////////////////////////

    // REVIEW ID
    this.getID = () => this.ID;
    this.setID = (ID) => this.ID = String(ID);

    // REVIEW AUTHOR
    this.getAuthor = () => this.author;
    this.setAuthor = (author) => this.author = String(author);


    // REVIEW DATE
    this.getDate = () => this.date;
    this.setDate = (date) => this.date = new Date(date);

    // REVIEW COMMENT
    this.getComment =  () => this.comment;
    this.setComment = function (comment) {
        this.comment = String(comment);
    }

    // REVIEW RATING
    this.getRating = function () {
        return this.rating;
    }
    this.setRating = function (rating) {
        this.rating = new Map(
            ["service", rating.get("service")],
            ["myPrice", rating.get("myPrice")],
            ["value", rating.get("value")],
            ["quality", rating.get("quality")]
        );
    }
}

function sortProducts(products, sortRule) {
    if (sortRule === "myPrice+") {
        return [...products].sort((a, b) => a.getPrice() > b.getPrice() ? 1 : -1);
    } else if (sortRule === "myPrice-") {
        return [...products].sort((a, b) => a.getPrice() < b.getPrice() ? 1 : -1);
    } else if (sortRule === "ID+") {
        return [...products].sort((a, b) => a.getID().toLowerCase() > b.getID().toLowerCase() ? 1 : -1);
    } else if (sortRule === "ID-") {
        return [...products].sort((a, b) => a.getID().toLowerCase() < b.getID().toLowerCase() ? 1 : -1);
    } else if (sortRule === "name+") {
        return [...products].sort((a, b) => a.getName().toLowerCase() > b.getName().toLowerCase() ? 1 : -1);
    } else if (sortRule === "name-") {
        return [...products].sort((a, b) => a.getName().toLowerCase() < b.getName().toLowerCase() ? 1 : -1);
    } else {
        console.log("wrong sort rule passed to sortProducts(): " + sortRule);
    }
}




///// TEMP ///// TEMP ///// TEMP ///// TEMP ///// TEMP ///// TEMP ///// TEMP 

_temp_testsProducts();


function _temp_testsProducts() {
    _temp_testSortingProducts();
}




function _temp_testSortingProducts() {
    let sortRules = [
        "myPrice-",
        "myPrice+",
        "ID+",
        "ID-",
        "name+",
        "name-"
    ]

    let prices = [1, 3, 5, 123, 4, 321.0123, 2];
    let IDs = ["a_ID", "1_ID", "aA_ID", "Aa_ID", "c5_ID", "z_ID", "Z_ID"];
    let names = ["Intel", "apple", "Dell", "Samsung", "logitech", "Motorola", "sven"];
    let objects = initProducts();

    console.log("original:");
    showKeyProperties(objects);


    sortAllAndShow(objects);



    function sortAllAndShow(array) {
        for (let i of sortRules) {
            console.log("\n\n" + i);
            let sortedArray = sortProducts(array, i);
            showKeyProperties(sortedArray);
        }
    }



    function showKeyProperties(argArr) {
        let bodrerWidth = 2;
        let arr = [];
        let tabWidth = 0;

        for (let i of argArr) {
            let lengths = [(i.getPrice() + "").length, i.getID().length, i.getName().length];
            for (let j of lengths) {
                if (j > tabWidth) {
                    tabWidth = j;
                }
            }
        }

        let addSpaces = (string) => " ".repeat(tabWidth - (string + "").length + bodrerWidth);

        for (let i of argArr) {
            let properties = [i.getPrice(), i.getID(), i.getName()];
            for (let i = 0; i < properties.length; i++) {
                properties[i] = "" + properties[i] + addSpaces(properties[i]);
            }
            arr.push(properties.join(""));
        }
        console.log(arr.join("\n"));
    }

    function initProducts() {
        let array = []
        for (let i = 0; i < prices.length; i++) {
            array[i] = new Product();
            array[i].setPrice(prices[i]);
            array[i].setID(IDs[i]);
            array[i].setName(names[i]);
        }
        return array;
    }

}
