//enhanced object literals 

function newUser(user, age, country, uId){
    return { //if the name does not change you can do the direct assignment
        user,//After
        age,
        country,
        id: uId//Before
    }
}
console.log(newUser("gndx",34,"MX"));