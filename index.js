import { checkSub } from 'subscription.js';
import { createBook } from 'createBook.js';
//import { User } или import { createUser }?
//VScode помечает второй вариант как вялый (не используется далее в коде)
//с первым же всё в порядке
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000);