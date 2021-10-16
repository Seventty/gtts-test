const gTTS = require('gtts');
      
const text = 'Hola, soy un texto';
const gtts = new gTTS(text, 'es');
  
gtts.save('vsay.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});