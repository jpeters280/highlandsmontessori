var target = document.querySelector(".instafeed-2");
      var loadButton = document.getElementById('load-more');

    var feed = new Instafeed({
      clientId: "cc2a8ee677554332b754dc8cbf958be0",
      accessToken: '3588773278.cc2a8ee.5a2465b2502c4cb984e5e943fbe84b3d',
      get: 'user',
      userId: '3588773278',
      limit: '20',
      target: target,
      template: '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="hovereffect"><a href="{{link}}"><img class="responsive" src="{{image}}" style="width: 100%; height: auto;"></a><a href="{{link}}"><div class="overlay"><h2>{{caption}}</h2></div></a></div></div>',
      useHttp: true,
      resolution: 'standard_resolution',
      success: function(data) {
        console.log(data);
      },
      after: function() {
        if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
        }
      }
    });
    loadButton.addEventListener('click', function() {
      feed.next();
    });
    feed.run();