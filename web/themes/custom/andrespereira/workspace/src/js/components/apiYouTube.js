window.Drupal.behaviors.apiYouTube = {
  attach: (context) => {

    let ifToBe = context.getElementsByClassName('field--name-field-video-os-id')
    let ifToBeCaw = context.getElementsByClassName('field--name-field-caw-video-id')
    let ifToBeBlock = context.getElementsByClassName('video-iframe')
    let playerap = context.getElementsByClassName('field--name-field-bw-video-id')


    if (ifToBe.length > 0 || ifToBeBlock.length > 0 || ifToBeCaw.length > 0 || playerap.length > 0 ) {
      __init()
      window.addEventListener("load", function (event) {
        if (ifToBeBlock.length > 0) {
          let idVideo = ifToBeBlock[0].getAttribute('data-idvideo')
          onYouTubeIframeAPIReady(idVideo)
        } else {
          if (ifToBe.length > 0) {
            let idVideo = ifToBe[0].outerText
            onYouTubeIframeAPIReady(idVideo)
          }
          if (ifToBeCaw.length > 0) {
            let idVideoCaw = ifToBeCaw[0].outerText
            onYouTubeIframeAPIReadyCaw(idVideoCaw)
          }
          if (playerap.length > 0) {
            let idVideoCaw = playerap[0].outerText
            onYouTubeIframeAPIReadyPlayerap(idVideoCaw)
          }
        }
      });
    }

    function __init() {
      let tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      let player = "";
    }

    function onYouTubeIframeAPIReady(idVideo) {
      player = new YT.Player('playerap', {
        videoId: idVideo,
        playerVars: {
          autoplay: 1, // Reproducir automáticamente el vídeo al comenzar
          controls: 1, // Mostrar botones de play/pausa
          showinfo: 0, // Ocultar el título del vídeo
          modestbranding: 1, // Ocultar el logo de YouTube
          loop: 1, // Reproducir el vídeo en bucle
          fs: 1, // Mostrar el botón de pantalla completa
          cc_load_policty: 0, // Ocultar modo de privacidad
          iv_load_policy: 3, // Ocultar las anotaciones del vídeo
          autohide: 0, // Ocultar los controles mientras se reproduce
          playlist: idVideo
        },
        controls: 0,
        events: {
          'onReady': onPlayerReady,
        }
      });
    }
    function onYouTubeIframeAPIReadyCaw(idVideo) {
      let idvideodiv = ""
      let value = context.getElementById('playerapcaw--2')
      if (value) {
        idvideodiv = 'playerapcaw--2';
      } else {
        idvideodiv = 'playerapcaw';
      }
      console.log(idvideodiv);
      player = new YT.Player(idvideodiv, {
        videoId: idVideo,
        playerVars: {
          autoplay: 1, // Reproducir automáticamente el vídeo al comenzar
          controls: 1, // Mostrar botones de play/pausa
          showinfo: 0, // Ocultar el título del vídeo
          modestbranding: 1, // Ocultar el logo de YouTube
          loop: 1, // Reproducir el vídeo en bucle
          fs: 1, // Mostrar el botón de pantalla completa
          cc_load_policty: 0, // Ocultar modo de privacidad
          iv_load_policy: 3, // Ocultar las anotaciones del vídeo
          autohide: 0, // Ocultar los controles mientras se reproduce
          playlist: idVideo
        },
        controls: 0,
        events: {
          'onReady': onPlayerReady,
        }
      });
    }
    function onYouTubeIframeAPIReadyPlayerap(idVideo) {   
      player = new YT.Player("videoworkshops", {
        videoId: idVideo,
        playerVars: {
          autoplay: 1, // Reproducir automáticamente el vídeo al comenzar
          controls: 1, // Mostrar botones de play/pausa
          showinfo: 0, // Ocultar el título del vídeo
          modestbranding: 1, // Ocultar el logo de YouTube
          loop: 1, // Reproducir el vídeo en bucle
          fs: 1, // Mostrar el botón de pantalla completa
          cc_load_policty: 0, // Ocultar modo de privacidad
          iv_load_policy: 3, // Ocultar las anotaciones del vídeo
          autohide: 0, // Ocultar los controles mientras se reproduce
          playlist: idVideo
        },
        controls: 0,
        events: {
          'onReady': onPlayerReady,
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {

      event.target.playVideo();
      event.target.mute();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
  },
};