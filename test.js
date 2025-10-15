const add = require("./calculatrice.js")


test("add(1,2)", ()=>{
    expect(add(1,2)).toBe(3)
    expect(add(2,2)).not.toBe(3)
})