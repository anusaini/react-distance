const Distance1D = (x, y) => Math.abs(x - y)
const Distance2D = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
const Distance3D = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2))

export default {
    Distance1D,
    Distance2D,
    Distance3D
}
