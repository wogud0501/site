const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const Product = mongoose.model('Product', {
    productName : String,
    productLoc : String,
    available : Number
});

app.use('/add_product', async (req, res) => {
    const { productName, productLoc, available } = req.body;


  const product = new Product({ productName, productLoc, available });
  await product.save();

   res.send('Add Successfully added')
});

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})