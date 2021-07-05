const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");


//routes
const superadminRoutes = require("./routes/superadmin/auth");
const adminRoutes = require("./routes/admin/auth");
const userRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const ProductsFieldbyAdmin = require("./routes/ProductsFieldbyAdmin");
const Product = require("./routes/Product");
const ProductDetails = require("./routes/ProductsDetails");

//environment variable or you can say constants
env.config();

// mongodb connection
//mongodb+srv://root:<password>@cluster0.8pl1w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
    .connect(
        //jattesh13@gmail.com
        // mongodb+srv://root:<password>@cluster0.doaxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.g0zuq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

        //`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.g0zuq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
        //password = admin

        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
    .then(() => {
        console.log("Database is connected");
    });


app.use(express.json());
app.use("/api", superadminRoutes);
app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", ProductsFieldbyAdmin);
app.use("/api", Product);
app.use("/api", ProductDetails);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
