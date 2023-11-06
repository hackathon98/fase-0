const styleSetter = (styles, el) => {
    for(let prop in styles) {
        el[prop] = styles[prop]
    }
}

export {styleSetter}