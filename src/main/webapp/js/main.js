initBTCPrice();
loadWebsites();

function loadWebsites() {

  const websites = [
    {
      title: 'HelloServlet',
      url: '/hello-servlet'
    }
  ];

  let collectionItemsHTML = "";
  for (let i = 0; i < websites.length; i++) {
    const website = websites[0];
    collectionItemsHTML += `
    <a href="${website.url}" class="collection-item">${website.title}</a>
    `
  }

  $('#websites').html(collectionItemsHTML);
}

function initBTCPrice() {
  const btcPrice = $('#btc-price');
  const ws = new WebSocket("wss://ws.bitstamp.net/");

  const btcSubscribe = JSON.stringify({
    "event": "bts:subscribe",
    "data": {
      "channel": "live_trades_btcusd"
    }
  });

  ws.onopen = function() {
    console.log('Connection established!');
    ws.send(btcSubscribe);
  };

  ws.onmessage = function(event) {
    const price = JSON.parse(event.data).data.price_str;
    if (price) {
      btcPrice.html(`$${price}`);
    } else {
      btcPrice.html('loading...');
    }
  };
}
