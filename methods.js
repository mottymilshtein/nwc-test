const a = (x,y,z) => {
    const res = x + y + z

    return res
}

const b = x => x

const c = function(x,y,z) {
    const res = x + y + z

    return res
}

function d (x,y,z) {
    const res = x + y + z

    return res
}

function e (...args) {
    return args.length
}

const f = async (x,y,z) => {
    const res = x + y + z

    return res
}

const g = async x => x

const h = async function (x,y,z) {
    const res = x + y + z

    return res
}

async function i (x,y,z) {
    const res = x + y + z

    return res
}

const onDescribe = () =>({
    methods: {
        ['a']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'string',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['b']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'string',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                }
            }
        },
        ['c']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'string',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['d']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['e']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['f']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['g']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                }
            }
        },
        ['h']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        },
        ['i']:{
            parameters: {
                ['x']: {
                    isRequired: true,
                        type: 'int',
                        format: 'email',
                        defaultValue: 'test@mail.com'
                },
                ['y']: {
                    isRequired: false,
                        type: 'string',
                        format: 'uuid',
                        defaultValue: 'adasd-dsadasdads-vcxvx'
                },
                ['z']:{
                    isRequired: false,
                        type: 'string'
                }
            }
        }
    }
} )


module.exports = {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    onDescribe
}
