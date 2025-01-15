function isShallowEqual(obj1, obj2, props) {
    if (typeof obj1 !== 'object') {
        throw new Error('First input should be an object');
    }

    if (!Array.isArray(props)) {
        throw new Error('Third input should be an array');
    }

    if (!props.every((prop) => typeof prop === 'string')) {
        throw new Error('Each element should be a string');
    }

    return props.every((key) => obj1[key] === obj2[key]);
}

const app = {
    isShallowEqual
}

module.exports = app