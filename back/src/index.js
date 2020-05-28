import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors'


const app = express()  
const port = 3000  
app.use(cors())



app.get('/EmployeeCards', (req, res) => {
    let name = req.query.signupName
    let cards = storage.cards
    
   if(name) {
    cards = storage.cards.filter(e => { 
        return e.signupName.indexOf(name) >= 0})
   }
    res.json(cards)
   
});




app.listen(port, () => console.log(`Slušam na portu ${port}!`))