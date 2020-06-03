import express from 'express';

//Deus é bom o tempo todo

//Deus é maravilhoso

//Deus como eu te amo

const app = express();

app.get('/users',(request,response) => {
    const res = 'Deus é bom o tempo todo.. Deus é maravilhoso'
    // console.log(res);

    response.json([
         'Felipe',
         'Fernanda',
         res
    ]);

    response.send('oi')
});

app.listen(3333);