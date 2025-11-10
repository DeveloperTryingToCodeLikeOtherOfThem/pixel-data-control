/// <reference no-default-lib="true"/>
/// <reference path="moreArrays.ts"/>

interface NumberData extends Number {
    //% helper=dataContainsScreenWidthAndHeight
    /**
     * @deprecated
     * Not meant for now it is not really deprecated but not done yet coming very soon
     */
    //% deprecated=1
    dataContains(): void
}

/**
 * For sprite image pixels data 
 */
//% blockNamespace=arrays
interface NumberDataArray<T> extends Array<T> {
    //% helper=dataContainsScreenWidthAndHeight
    /** 
     * @deprecated
     * Not meant for now it is not really deprecated but not done yet coming very soon
     */
    //% deprecated=1
    dataContains(): void
}

interface Sprite extends Sprite_ {
    // implemented in Sprite_
}


interface Image {
    //% helper=pixels_get
    readonly pixels: number[]
}

interface Sprite_ {
    //% helper=pixels_get
    /**
     * gets the number of pixels the sprite data contains
     */
    pixels(image: Image): number[]
    //% helper=hasPixels
    /**
     * Checks if the sprite has pixels 
     * @param image has the image pixels and data the sprite contains
     */
    hasPixels(image: Image): boolean
}
