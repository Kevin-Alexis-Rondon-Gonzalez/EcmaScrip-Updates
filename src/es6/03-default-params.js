//Before
function newUser(name, age, country){
    var name = name || "Kevin";
    var age = age || 22;
    var country = country || "Colombia"
    console.log(name,age,country);
}
newUser();
newUser("karina",22,"Canada");

//After
function newAdmin(name="OScar", age="34", country="Mexico"){
    console.log(name,age,country);
}
newAdmin();
newAdmin("Ana",28,"Peru")