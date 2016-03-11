

//kan brukes når man skal logge inn

//finds the user with the email mar@hotmail.com, selecting the name and password
User.findOne({ 'email': 'mar@hotmail.com' }, 'nickname password', function (err, user) {
    if (err) return handleError(err);
})


//http://mongoosejs.com/docs/queries.html