let person = require("../../src/src/unitTesting")

var testPerson = new person();

describe("sayHello",function(){

    it("calls the sayHello()", function(){
    
        spyOn(testPerson, "sayHello");

        testPerson.sayHello('Ryan',30,'male',['being a hardarse',' agile', ' ssd hard drives'] );
    expect(testPerson.sayHello).toHaveBeenCalled();
    expect(testPerson.sayHello).toHaveBeenCalledTimes(1);
    expect(testPerson.sayHello).toHaveBeenCalledWith('Ryan',30,'male',['being a hardarse',' agile', ' ssd hard drives'] );


    });


});
