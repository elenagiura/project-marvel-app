const publicKey='34fcb357a13f2ea5f044e9af445741cb';
const privKey='9e9457f71c94680e39eaf9ece3920b3f7fce09bc';

const ts = 5;

const md5 = require('md5');
const hash = md5(ts+privKey+publicKey); 

const urlBase = `http://gateway.marvel.com/v1/public/`;
const urlExtension = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

export { urlBase, urlExtension };

	