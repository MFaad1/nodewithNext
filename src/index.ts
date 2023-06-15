import express, { Request, Response } from "express";
let cors = require('cors');
import axios from 'axios'

const app = express();
app.use(cors())
app.use(express.json())

app.get('/about', async(req: Request, res: Response) => {
    res.send('This is the reponse from Node js').status(200);
});

app.post('/data',(req: Request, res: Response)=>{
    const {input} = req.body;
    let fetchData=()=>{
        return axios.get('https://serpapi.com/search?engine=google_maps', {
            params: {
              api_key: "4f2744c99de17c74dc12a51a07b99502af791c3bbc47096580ead6cd70397424",
              engine: 'google',
              q: "coffee"
            }
          })
            .then((response:any) => {
               return response.data
                
            })
            .catch((error:Error) => {
              console.error(error);
            });
    }

    const addData= async(targetValue:any)=>{
        const result= await fetchData()
        for(let value in result){
       
         let newValue = result[value]
       
         if(Array.isArray(newValue)){
         for(let obj of newValue){
         if(typeof(obj)==='object'){
         for(let key in obj){
           if(obj[key]===targetValue){
             return obj;
           }
           else if(Array.isArray(obj[key])){
             for(let value of obj[key]){
               if(value===targetValue){
                return (obj[key]);
                 return ( `Title: ${obj.title}, Position: ${obj.position} ${ JSON.stringify(obj[key])}`)

               }
             }
           }
           else if(typeof(obj[key]=='object')){
             for(let value in obj[key]){
               if(obj[key][value]===targetValue){
                return obj[key]
                 return (`Title: ${obj.title}, Position: ${obj.position} ${JSON.stringify(obj[key])}`)
               }
             }
           }
         }
         }
         
         }
         }
       
         else if(typeof(newValue)=='object'){
           for(let key in newValue){
             if(newValue[key]===targetValue){
               return newValue
             }
             else if(Array.isArray(newValue[key])){
               for(let value of newValue[key]){
                 if(newValue[key][value]=== targetValue){
                   return newValue[key]
                 }
                 else if(typeof(newValue[key][value]) == 'object'){
                   for(let data in newValue[key][value]){
                    
                    return newValue[key][value]
                     return (`Title: ${newValue[key][value].title}, Position: ${newValue[key][value].position} ${data}: ${ newValue[key][value]}`)   
                   }
                 }
                 else if(Array.isArray(newValue[key][value])){
                   for(let data  of newValue[key][value]){
                     if(data=== targetValue){
                       return newValue[key][value]
                     }
                   }
                 }
       
               }
             }
             else if(typeof(newValue[key])== 'object'){
               for(let value in newValue[key]){
                 if(targetValue=== value){
                   return newValue[key]
                 }
               }
             }
           }
         }
         else{
           let value ='Value not found'
           return value;
         }
         }
       }
       
       addData(input)
       .then((response:any)=> {
       return res.status(200).json({
        data: response
       })
    })
       .catch(errr=> {
        return res.status(404).json({
            message:"data not found",
            data: errr.message
           })
       })

})


app.listen(3200, () => {
    console.log('Server is running on port 3200');
});
