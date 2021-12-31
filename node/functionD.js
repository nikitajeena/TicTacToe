function Person () {
    const id = 123;
    const getId = function () { return id; }
    return {
        getId
    }
}

const p = Person();
console.log(p.getId())