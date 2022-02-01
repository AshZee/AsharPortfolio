
//Hi
const express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');

const app = express();
const PORT = process.env.PORT || 80;
const hostName = '0.0.0.0';

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/font', express.static(__dirname + '/public/font'));
app.use(express.json());

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/views/projects.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});
app.post('/contact', (req,res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ashzee10000@gmail.com',
            pass: 'vbpavaqfjkfmkugm'
        }
    })
    const mailOptions = {
         from: req.body.email,
         to: 'ashzee10000@gmail.com',
         subject: 'Message from ' + req.body.email+ ': '+ req.body.subject,
         text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('Error'+error);
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send("Success");
        }
    })
});
app.listen(PORT, hostName, () => console.info('Server running at ' + hostName+ ': ' + PORT +'...'));