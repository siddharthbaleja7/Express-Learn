const express = require('express')
const app = express();
// it is used for calling also likke we do the get mapping and all

let courses = [
    {id : 1,name : 'Java'},
    {id : 2,name : 'DSA'},
    {id : 3,name : 'JavaScript'},
];
app.get('/courses', (req,res) => {
    res.json(courses);
});
// this is use to call the function using the port
app.listen(3000 , () => {
    console.log("Started");
})