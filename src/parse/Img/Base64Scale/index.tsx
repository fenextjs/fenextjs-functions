export interface parseImgBase64ScaleProps {
    base64: string;
    width: number;
    height?: number | "auto";
    quality?: number;
}

export const parseImgBase64Scale = async ({
    base64,
    width,
    height = "auto",
    quality = 1,
}: parseImgBase64ScaleProps) => {
    try {
        const image = await createImageBitmap(
            await fetch(base64).then((response) => response.blob()),
        );
        const scaleFactor = width / image.width;
        const newHeight =
            height == "auto" ? image.height * scaleFactor : height;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = newHeight;

        const context = canvas.getContext("2d");

        if (context) {
            context.drawImage(image, 0, 0, width, newHeight);

            const compressedBase64 = canvas.toDataURL("image/jpeg", quality);

            return compressedBase64;
        }
        return undefined;
    } catch (error) {
        return undefined;
    }
};
