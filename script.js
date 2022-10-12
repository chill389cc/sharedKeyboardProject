// runs on page startup
(function () {
  var container = document.querySelector("#redditFeed");
  reddit.top("CustomKeyboards").t("month").limit(50).fetch(function (res) {
    for (var i = 0; i < res.data.children.length; i++) {
      var data = res.data.children[i].data;

      var a = document.createElement("a");
      a.href = "https://reddit.com" + data.permalink;
      var feedItemCard = document.createElement("div");
      feedItemCard.classList.add("feed-item", "card");
      var img = document.createElement("img");
      img.classList.add("card-img-top");
      // post has multiple images and won't render well so skip it
      if (!data.url.includes('i.redd.it')) continue;
      console.log(data);
      img.setAttribute("src", data.url);
      img.setAttribute("alt", data.title);
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      var h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.innerText = data.title;
      var p = document.createElement("p");
      p.classList.add("card-text", "text-muted");
      p.innerText = "by " + data.author;

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      feedItemCard.appendChild(img);
      feedItemCard.appendChild(cardBody);
      a.appendChild(feedItemCard);

      container.appendChild(a);
    }
  });
})();
