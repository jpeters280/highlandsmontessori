var target = document.querySelector(".instafeed-2");
      var loadButton = document.getElementById('load-more');

    var feed = new Instafeed({
      clientId: "904ff88496764276be7e9d62a5d6f626",
      accessToken: '259077635.904ff88.8ebf93f875c84e40baf822a5e42b2e54',
      get: 'user',
      userId: '259077635',
      limit: '20',
      target: target,
      template: '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="hovereffect"><img class="responsive" src="{{image}}" style="width: 100%; height: auto;"><div class="overlay"><h2>{{caption}}</h2><p><a href="{{link}}">LINK HERE</a></p></div></div></div>',
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