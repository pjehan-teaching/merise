import Prism from 'prismjs';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images
require.context('./files', false, /\.(pdf)$/); // Import all PDF files

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

});
