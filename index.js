const express = require("express");
const app = express();
const path = require("path");
const product = require("./api/scrape");

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ extended: false }));

app.use("/api/scrape", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));