//Update the count of Person 2 inside readers Array in Javascript;
//create a function called update

function update(){
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
    //update the count of person2 in readers
    var person2=library[0].readers[1].count=1000;
    //print the updated count value
    console.log(library[0].readers[1].count);
}
update();
