const express = require('express');
const app = express();

app.use(express.json());

const userRoute = require('./router/userRouter');
const postRoute = require('./router/postRouter');

//userRouter
app.use('/users', userRoute);

//postRouter
app.use('/posts', postRoute);

app.get('*', (req, res, next) => {
    console.log('This brand does not exist');
});

app.listen(3000, console.log('Server is running at port 3000'));