export default class City {
    constructor(name, region, country, photo, desc, imgLocation,rating, stage) {
        this.name = name
        this.region = region
        this.country = country
        this.photo = photo
        this.desc = desc
        this.imgLocation = imgLocation
        this.rating = rating
        this.stage = stage

    }
    static compare(cityA, cityB) {
        if (cityA.name < cityB.name)
            return -1;
        if (cityA.name > cityB.name)
            return 1;
        return 0;
    }

    static compare1(cityA, cityB) {
        if (cityA.rating > cityB.rating)
            return -1;
        if (cityA.rating < cityB.rating)
            return 1;
        return 0;
    }
}