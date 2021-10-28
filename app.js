const express = require('express');
const app = express();
const mongodb = 'mongodb+srv://shamsursajib:Sajib123@@@cluster0.iehho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    const items = [
        { name: 'Mobile', price: 2000 },

        { name: ' Book', price: 30 },

        { name: 'COmputer', price: 3000 },
    ]

    // res.send(' <p> Hello </p>')
    res.render('index', { items });
})

app.get('/add-item', (req, res) => {

    // res.sendFile('./views/add-item.html', { root: __dirname })
    res.render('add-item');

})


app.use((req, res) => {
    // res.sendFile('./views/error.html', { root: __dirname })
    res.render('error');

}
)