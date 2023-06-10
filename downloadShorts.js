const ytdl = require('ytdl-core');

async function downloadShorts(url) {
  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { filter: 'video/mp4' });
    if (format) {
      const video = ytdl(url, { format: format });
      video.pipe(fs.createWriteStream('shorts.mp4'));
      console.log("Descarga completa.");
    } else {
      console.log("No se encontró ningún vídeo compatible.");
    }
  } catch (error) {
    console.log("Se produjo un error durante la descarga:", error);
  }
}

// URL del YouTube Shorts que deseas descargar
const shortsUrl = 'https://www.youtube.com/shorts/XXXXXXXXXXX';

// Llama a la función de descarga
downloadShorts(shortsUrl);
