export const checkImageURL = (url) => {
 //It just checks if image URL is correct or not. Ex: https://example.com/image.jpg
//It uses Regex expression and returns true if it found png, jpg, jpeg, bmp, gif, webp at the end of URL
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
};
