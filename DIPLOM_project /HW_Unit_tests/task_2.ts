// - Класс регистрационная форма. Описать каждое поле формы методом, входными и выходными значениями.
// - Создать тестовый фреймворк для юнит тестов по описанной регистрационной форме:
// 	- реализовать минимум 15 положительных кейсов
// 	- реализовать минимум 15 негативных кейсов
// 	- тестовый фреймворк брать на свое усмотрение: Mocha или Jest


export class RegistrationForm{
  
  public valUsername(username :string){
    if(username .length < 3 ||username .length >= 10 ){
     return '1. Your username does not fit the length'
    }else if(username  === ''){
     return '2. You did not fill in the field userName'  
    }else if(username  === undefined){
     return '3. You did not fill in the field userName'  
    }else if(!/[A-Z]/.test(username .charAt(0))){
         return '4. Your username does not begin with a capital letter'
    }else if(username .search(/^[a-zA-Z]+$/)){
         return '5. Your username contains illegal characters'
    }else{
      return username 
    }
  }
    
      public valEmail(email:string){
        if(email.length <= 10 ||email.length >= 20 ){
         return '1. Your email does not fit the length'
        }else if(email === ''){
         return '2. You did not fill in the field email'  
        }else if(email === undefined){
         return '3. You did not fill in the field email'  
        }else if(email.includes(' ')){
         return '4. Your email cannot contain spaces'
        }else if(!email.includes('@')){
         return '5. Your email does not contain an @'
        }else if(!email.search(/[а-яА-ЯЁё-і]/g)){
         return '6. Your email content Cyrillic'
        }else{
          return email
        }
      }

    public valPassword(password:string){
       if(password.length <= 5 || password.length >= 20 ){
         return '1. Your password does not fit the length'
        }else if(password.search(/([A-Za-z]+[0-9]+|[0-9]+[A-Za-z]+)/gm)) {
         return '2. Password should contain only numbers and Latin letters'  
        }else if(password === ''){
         return '3. You did not fill in the field password'
        }else if(password === undefined){
         return '4. You did not fill in the field password'  
        }else{
          return password
        }
    }

  }

 


