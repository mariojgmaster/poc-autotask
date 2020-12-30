module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.get('/getUsers', app.api.getData.users)
    app.post('/controllDevice', app.api.controllDevice.toggleLed)
    app.post('/agendar', app.api.agendar.scheduleJob)
}