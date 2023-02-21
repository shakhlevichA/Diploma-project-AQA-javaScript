import assert from "assert";
import { RegistrationForm } from "../task_2";

//userName: string;//1. Длинна от 3 до 9; 2. Обязательное; 3. Не может содержать не алфавитные символы; 4. Первая буква должна быть заглавной.
// Email: string;//1. Длинна от 11 до 19; 2. Обязательное; 3. Содержит @. 4. Не может содержать пробелы.
// password: string//1. Длинна от 6 до 19; 2. Обязательное;3. Должен  содержать латинские буквы и цифры.
    

describe("Registration form password field (positive tests) ", function(){
    const newRegistrClass = new RegistrationForm()
    
    it("Minimum valid password", function(){
        const exp = 'qwe123'
        const act = newRegistrClass.valPassword(exp)
        assert.equal(act, exp)
    })

    it("Maximum valid password", function(){
        const exp = 'qwerty789qwerty1719'
        const act = newRegistrClass.valPassword(exp)
        assert.equal(act, exp)
    })

    it("Password contains both uppercase and lowercase letters and numbers.  ", function(){
        const exp = 'medMED33'
        const act = newRegistrClass.valPassword(exp)
        
        assert.equal(act, exp)
    })
})

describe("Registration form password field (negative tests) ", function(){
    const newRegistrClass = new RegistrationForm()

    it("Blank field", function(){
        const act = newRegistrClass.valPassword('')
        const exp = '1. Your password does not fit the length'
        assert.equal(act, exp)
    })

    it("Short password", function(){
        const act = newRegistrClass.valPassword('asd12')
        const exp = '1. Your password does not fit the length'
        assert.equal(act, exp)
    })

    it("Long password", function(){
        const act = newRegistrClass.valPassword('qwerty123456qwerty12')
        const exp = '1. Your password does not fit the length'
        assert.equal(act, exp)
    })

    it("Password has only numbers", function(){
        const act = newRegistrClass.valPassword('123456')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })

    it("Password contains only Latin letters", function(){
        const act = newRegistrClass.valPassword('newRegistrClass')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })

    it("Password contains only Cyrillic letters", function(){
        const act = newRegistrClass.valPassword('андрей')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })

    it("Password contains Cyrillic letters and numbers", function(){
        const act = newRegistrClass.valPassword('андрей123')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })

    it("Password contains a space", function(){
        const act = newRegistrClass.valPassword('qwwert 123')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })

     it("Password contains non-alphabetic characters ", function(){
        const act = newRegistrClass.valPassword('qwwert@123')
        const exp = '2. Password should contain only numbers and Latin letters' 
        assert.equal(act, exp)
    })
  
})
























