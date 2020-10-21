class Statement {
    constructor(title, image, description, contactPersonName, contactPersonNumber, address,  pet, price, id) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.pet = pet;
        this.price = price;
        this.id = id;
    }
}

class Pet {
    constructor(category, age, gender) {
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
}

class Cat extends Pet {
    constructor(category, age, gender, toiletFriendly) {
        super(category, age, gender);
        this.toiletFriendly = toiletFriendly;
    }
}

class sourceindex {
    constructor(currentpos){
    this.currentpos = currentpos;
    }
}