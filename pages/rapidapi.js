
function RenderEthPriceAPI() {
  const http = require("https");

  const options = {
  	"method": "GET",
  	"hostname": "coingecko.p.rapidapi.com",
  	"port": null,
  	"path": "/simple/token_price/ethereum?contract_addresses=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&vs_currencies=usd&include_24hr_vol=false&include_market_cap=false&include_last_updated_at=false&include_24hr_change=false",
  	"headers": {
  		"x-rapidapi-key": "ec099dd9fcmsh08705dc393fae26p1e4b3ajsn9078b1ab40e2",
  		"x-rapidapi-host": "coingecko.p.rapidapi.com",
  		"useQueryString": true
  	}
  };

  const req = http.request(options, function (res) {
  	const chunks = [];
  	res.on("data", function (chunk) {
  		chunks.push(chunk);
  	});

  	res.on("end", function () {
  		const body = Buffer.concat(chunks);
  		console.log(body.toString());
  	});
  });

  req.end();

}

export default RenderEthPriceAPI;
