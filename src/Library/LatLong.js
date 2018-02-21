// https://www.movable-type.co.uk/scripts/latlong.html

class LatLong {
    constructor(lat, long) {
        this.lat = lat
        this.long = long
        this.radius = 6731e3 // https://en.wikipedia.org/wiki/Great-circle_distance#Radius_for_spherical_Earth
        this.latR = this.lat * (Math.PI/180)
    }
    calculateDistance(other) {
        const deltaLatR = (this.lat - other.lat) * (Math.PI/180)
        const deltaLongR = (this.long - other.long) * (Math.PI/180)
        const otherLatR = other.lat * (Math.PI/180)
        const a = Math.pow(Math.sin(deltaLatR/2), 2) + ((Math.pow(Math.sin(deltaLongR/2),2) * (Math.cos(this.latR) * Math.cos(other.latR))))
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        return this.radius * c
    }
}

export default LatLong
