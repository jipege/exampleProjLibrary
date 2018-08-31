//import { User } или import { createUser }?
//VScode помечает второй вариант как вялый (не используется далее в коде)
//с первым же всё в порядке
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);