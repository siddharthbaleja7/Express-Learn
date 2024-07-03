const express = require('express')
// const bodyParser = require('body-parser')
const app = express();
// app.use(bodyParser.json());
// it is used for calling also likke we do the get mapping and all

// app.use() this is use for converting the string which is given by postman to json format
app.use(express.json()); // Middleware to parse JSON body
let courses = [
    {id : 1,name : 'Java'},
    {id : 2,name : 'DSA'},
    {id : 3,name : 'JavaScript'},
    
];


//function middleware
function middleware(req,res,next){
    const {method,ip,hostname} = req;
    console.log(`Method : ${method} , ip : ${ip} , hostname : ${hostname}`)
    // this is like serving the corn after roastinh
    next();
}
app.use(middleware);

//get mapping
app.get('/courses', (req,res) => {
    res.json(courses);
});


//post mapping
app.post('/courses', (req,res) => {
    const newcourses = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(newcourses);
    res.send(courses);
    console.log(req.body);
});

//put mapping
app.put('/courses',(req,res) => {
    const id = 2;
    const courseIndex = courses.findIndex(c => c.id === id);
    courses[courseIndex].name = req.body.name;
})

//delete mapping
app.delete('/courses/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === id);
    courses.splice(courseIndex,1);
    res.send(`Course with ID ${id} deleted successfully.`);
});


// this is use to call the function using the port
app.listen(3009 , () => {
    console.log("Started");
})