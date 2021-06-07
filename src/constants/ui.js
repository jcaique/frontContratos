import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

export const sizes = {
    base: 8,
    fontNormal: 14,
    fontBig: 20,
    borderRadius: 20,
    width,
    height
}

const ui = { sizes }
export default ui