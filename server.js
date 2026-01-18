const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Подключаемся к MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Схема пользователя (опечатка в названии была)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const app = express();
const PORT = process.env.PORT || 3000; // Добавил значение по умолчанию

// Middleware для обработки данных из форм
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/regpage.html');  
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/loginpage.html');
});

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/public/user.html');
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send('User already exists. <a href="/login">Login here</a>');
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send('Registration successful! <a href="/login">Login now</a>');
    } catch (err) {
        res.send('Server error: ' + err.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });
        
        if (!user) {
            return res.send('Invalid email or password. <a href="/login">Try again</a>');
        }

        // Редирект на страницу пользователя с его ID
        res.redirect('/user/' + user._id);

    } catch (err) {
        res.send('Server error: ' + err.message);
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            return res.send('User not found!');
        }
        
        res.send(`
            <h1>Welcome, ${user.name}!</h1>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Password:</strong> ${user.password}</p>
            <p><strong>ID:</strong> ${user._id}</p>
            <br>
            <a href="/">Logout</a>
        `);
        
    } catch (error) {
        res.send('Error: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});