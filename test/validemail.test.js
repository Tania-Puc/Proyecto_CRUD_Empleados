
//validar correo
const validEmail =require('./validemail');

test ('email taniapuc@gmail.com -> true',  ()=>{
    expect(validEmail.isvalidEmail('taniapuc@gmail.com')).toBe(true)
});


test ('email 1 -> false',  ()=>{
    expect(validEmail.isvalidEmail('1')).toBe(false)
});