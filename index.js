import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send('Hello, world!!!!!!!!');
});

const port = process.env.PORT || 5080;

console.log('Starting on port', port);

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Listening!')
    }
});
