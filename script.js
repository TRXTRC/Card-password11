// List of affiliate links
const services = [
  { name: "CustomHits", url: "https://customhits.net/?ref=51245" },
  { name: "10kHits", url: "https://www.10khits.com/?ref=440022" },
  { name: "BigHits4U", url: "https://digipreneurpro.com/bighits4u" },
  { name: "OTOHits", url: "https://www.otohits.net/?ref=187437" },
  { name: "WebSyndic", url: "http://www.websyndic.com/?ref=1056792" },
  { name: "RankBoostUp", url: "https://rankboostup.com/?refid=397772" },
  { name: "FeelingSurf", url: "https://www.feelingsurf.fr/r/49198" },
  { name: "AutoWebSurf", url: "https://autowebsurf.com/?ref=46210" },
  { name: "Klixion", url: "http://www.klixion.com/?ref=41806" },
  { name: "EasyHits4U", url: "https://digipreneurpro.com/easyhits4u" },
  { name: "LeadsLeap", url: "https://leadsleap.com/?r=order" },
  { name: "HungryForHits", url: "https://hungryforhits.com/?rid=28573" },
  { name: "TrafficAdBar", url: "https://digipreneurpro.com/trafficadbar" },
  { name: "TrafficSwirl", url: "http://trafficswirl.com/?rid=98597" },
  { name: "TraffUp", url: "https://traffup.net/free/?rf=416074216" },
  { name: "TraffBoost", url: "https://www.traffboost.net/?ref=188718" },
  { name: "TrafficCrowd", url: "https://digipreneurpro.com/trafficcrowd" },
  { name: "CoinPayU", url: "https://digipreneurpro.com/coinpayu" },
  { name: "Cointiply", url: "https://digipreneurpro.com/cointiply" },
  { name: "FaucetPay", url: "https://faucetpay.io/?r=4679006" },
  { name: "99Faucet", url: "https://99faucet.com/?r=25352" },
  { name: "CoinPayZ", url: "https://coinpayz.xyz/?r=443146" },
  { name: "Dogemate", url: "https://dogemate.com/ref/838831590" },
  { name: "ClaimBits", url: "https://claimbits.net/?ref=225909" }
];

// Populate the list
const serviceList = document.getElementById("service-list");
services.forEach(service => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = service.url;
  a.textContent = service.name;
  a.target = "_blank"; // Open in new tab
  li.appendChild(a);
  serviceList.appendChild(li);
});