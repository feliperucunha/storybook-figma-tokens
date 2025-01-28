import tokens from '../figma.json'

function convertToObjects(obj) {
    const result = {};

    for (const key in obj) {
        const item = obj[key];
        if (item.type && item.value) {
            result[key] = { type: item.type, value: item.value };
        } else if (typeof item === 'object') {
            result[key] = convertToObjects(item);
        } else {
            result[key] = item;
        }
    }

    return result;
}

const convertedObjects = convertToObjects(tokens.demo);
export default convertedObjects;
