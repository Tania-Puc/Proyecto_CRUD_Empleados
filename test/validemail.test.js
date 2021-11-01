
//validar correo
const validEmail =require('./validemail');

test ('email taniamonserratpucpoot@gmail.com -> true',  ()=>{
    expect(validEmail.isvalidEmail('taniapuc@gmail.com')).toBe(true)
});


test ('email 1 -> false',  ()=>{
    expect(validEmail.isvalidEmail('1')).toBe(true)
});