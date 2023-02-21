import assert from "assert";
import { RegistrationForm } from "../task_2";

//userName: string;//1. Длинна от 3 до 9; 2. Обязательное; 3. Не может содержать не алфавитные символы; 4. Первая буква должна быть заглавной.
// Email: string;//1. Длинна от 11 до 19; 2. Обязательное; 3. Содержит @. 4. Не может содержать пробелы.
// password: string//1. Длинна от 6 до 19; 2. Обязательное;3. Должен  содержать латинские буквы и цифры.
    

describe("Registration form email field (positive tests) ", function(){
    const newRegistrClass = new RegistrationForm()
    
    it("Minimum valid email", function(){
        const exp = 'n@gmail.com'
        const act = newRegistrClass.valEmail(exp)
        assert.equal(act, exp)
    })

    it("Maximum valid email", function(){
        const exp = 'Maximumqq@gmail.com'
        const act = newRegistrClass.valEmail(exp)
        assert.equal(act, exp)
    })

    it("Email with a different domain", function(){
        const exp = 'medium@yandex.ru'
        const act = newRegistrClass.valEmail(exp)
        assert.equal(act, exp)
    })

    it("Email with numbers", function(){
        const exp = 'med33@gmail.com'
        const act = newRegistrClass.valEmail(exp)
        assert.equal(act, exp)
    })

    it("Email with characters", function(){
        const exp = 'med3_3@gmail.com'
        const act = newRegistrClass.valEmail(exp)
        assert.equal(act, exp)
    })

})

describe("Registration form email field (negative tests) ", function(){
    const newRegistrClass = new RegistrationForm()

    it("Blank field", function(){
        const act = newRegistrClass.valEmail('')
        const exp = '1. Your email does not fit the length'
        assert.equal(act, exp)
    })

    it("Short email", function(){
        const act = newRegistrClass.valEmail('@gmail.com')
        const exp = '1. Your email does not fit the length'
        assert.equal(act, exp)
    })

    it("Long email", function(){
        const act = newRegistrClass.valEmail('Maximumqqq@gmail.com')
        const exp = '1. Your email does not fit the length'
        assert.equal(act, exp)
    })

    it("Email does not contain an @", function(){
        const act = newRegistrClass.valEmail('maximumgmail.com')
        const exp = '5. Your email does not contain an @'
        assert.equal(act, exp)
    })

    it("Email contains a space ", function(){
        const act = newRegistrClass.valEmail('maxi mum@gmail.com')
        const exp = '4. Your email cannot contain spaces'
        assert.equal(act, exp)
    })

    it("Email contain Cyrillic letters", function(){
        const act = newRegistrClass.valEmail('гтлmum@gmail.com')
        const exp = '6. Your email content Cyrillic'
        assert.equal(act, exp)
    })
  
})
























