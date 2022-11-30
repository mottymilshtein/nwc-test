const func1 = (x,y,z = '1') => {
    const res = x + y + z

    return res
}

const func2 = x => x

const func3 = function(x,y,z = '1') {
    const res = x + y + z

    return res
}

function func4 (x,y,z = '1') {
    const res = x + y + z

    return res
}

function func5 (...args) {
    return args.length
}

const func6 = async (x,y,z = '1') => {
    const res = x + y + z

    return res
}

const func7 = async x => x

const func8 = async function (x,y,z = '1') {
    const res = x + y + z

    return res
}

async function func9 (x,y,z = '1') {
    const res = x + y + z

    return res
}

module.exports = {
    func1,
    func2,
    func3,
    func4,
    func5,
    func6,
    func7,
    func8,
    func9
}