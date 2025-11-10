namespace helpers {
    function pixels_get(image: Image): number[] {
        const pixelDataSheets: number[] = []

        for (let y = 0; y < image.height; y++) {
            for (let x = 0; x < image.width; x++) {
                const pixels = image.getPixel(x, y)
                pixelDataSheets.push(pixels)
            }
        }

        return pixelDataSheets
    }

    export function hasPixels(image: Image): boolean {
        return !!pixels_get(image)
    }

    export function dataContainsScreenWidthAndHeight(data: number[]) {
        return data === pixels_get(screen)
    }
}
