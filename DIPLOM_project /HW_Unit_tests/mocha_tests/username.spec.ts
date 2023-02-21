import assert from "assert";
import { RegistrationForm } from "../task_2";

//userName: string;//1. Длинна от 3 до 9; 2. Обязательное; 3. Не может содержать не алфавитные символы; 4. Первая буква должна быть заглавной.
// mail: string;//1. Длинна от 11 до 19; 2. Обязательное; 3. Содержит @.
// password: string//1. Длинна от 6 до 19; 2. Обязательное;3. Должен  содержать латинские буквы и цифры.
    

describe("Registration form username field (positive tests) ", function(){
    const newRegistrClass = new RegistrationForm()
    
    it("Minimum valid username ", function(){
        const exp = 'Sam'
        const act = newRegistrClass.valUsername(exp)
        assert.equal(act, exp)
    })

    it("Maximum valid username ", function(){
         const exp = 'Alexander'
        const act = newRegistrClass.valUsername(exp)
        assert.equal(act, exp)
    })

    it("Username begins with a capital letter", function(){
         const exp = 'Alex'
        const act = newRegistrClass.valUsername(exp)
        assert.equal(act, exp)
    })

    it("Username written in capital letters ", function(){
        const exp = 'WILLIAM'
        const act = newRegistrClass.valUsername(exp)
        assert.equal(act, exp)
    })

})

describe("Registration form username field (negative tests) ", function(){
    const newRegistrClass = new RegistrationForm()

    it("Blank field", function(){
        const act = newRegistrClass.valUsername('')
        const exp = '1. Your username does not fit the length'
        assert.equal(act, exp)
    })

    it("Short username", function(){
        const act = newRegistrClass.valUsername('As')
        const exp = '1. Your username does not fit the length'
        assert.equal(act, exp)
    })

    it("Long username", function(){
        const act = newRegistrClass.valUsername('Alexandera')
        const exp = '1. Your username does not fit the length'
        assert.equal(act, exp)
    })

    it("Username with a small letter", function(){
        const act = newRegistrClass.valUsername('william')
        const exp = '4. Your username does not begin with a capital letter'
        assert.equal(act, exp)
    })

    it("Username contains numbers", function(){
        const act = newRegistrClass.valUsername('Ethan3')
        const exp = '5. Your username contains illegal characters'
        assert.equal(act, exp)
    })

    it("Username contains an @", function(){
        const act = newRegistrClass.valUsername('M@son')
        const exp = '5. Your username contains illegal characters'
        assert.equal(act, exp)
    })

    it("Username contains a space", function(){
        const act = newRegistrClass.valUsername('M son')
        const exp = '5. Your username contains illegal characters'
        assert.equal(act, exp)
    })

     it("Username in Cyrillic alphabet", function(){
        const act = newRegistrClass.valUsername('Андрей')
        const exp = '4. Your username does not begin with a capital letter'
        assert.equal(act, exp)
    })
  
})



 




















