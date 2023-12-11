/**
 * @function replace
 * @param {string} replaceThisString
 * @param {string} replaceWith
*/

export function replace(replaceThisString, replaceWith) {
     if (typeof replaceThisString !== string) {
        throw new Error("First argument must be a string.");
     }

     if(typeof replaceWith !== string | undefined) {
        throw new Error("Second argument must be a string or empty.");
     }

     replaceWith = replaceWith ? replaceWith : "-";

     const newSluggedUrl = replaceThisString.split(" ").join(replaceWith);
     return newSluggedUrl;
 }