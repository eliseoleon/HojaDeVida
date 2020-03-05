const express = require('express');
const path = require('path');
const app = express(); //conveertir express en un objeto ya que es un framework mas nonuna libreria
const files = path.join(__dirname, '/views');



app.use( express.static( path.join ( __dirname, '/public' ) ) )


app.get('/', (req, res)=>{
    res.sendFile( `${files}/index.html` );
 
    
});
app.route( '/experience' ).get( (req, res)=>{
    res.sendFile(`${files}/experience.html`);
} )

app.route( '/studies' ).get( (req, res)=>{
    res.sendFile(`${files}/studies.html`);
} )
app.route( '/contacto' ).get( (req, res)=>{
    res.sendFile(`${files}/contacto.html`);
} )
app.route( '/login-usuario' ).get( (req, res)=>{
    if (req.query.usuario === 'Eliseo' && req.query.password === '12345') {
        res.sendFile(`${files}/index.html`);
    } else {
        res.sendFile(`${files}/falloLogin.html`);
    }
} )

app.listen(4200);