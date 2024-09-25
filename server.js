const http = require("http");
const PORT = 4040;
const DATA1 = require("./DATA-1.json");
const DATA2 = require("./DATA-2.json");
const DATA3 = require("./DATA-3.json");
const DATA4 = require("./DATA-4.json");
const Error = require("./Error.json");

http
  .createServer((req, res) => {
    const path = req.url;
    switch (path) {
      case "/":
        res.end(
          JSON.stringify({
            message:
              "Welcome to the REST API. Available endpoints are /data1, /data2, /data3, and /data4.",
          })
        );
        break;
      case "/data1":
        res.end(JSON.stringify(DATA1));
        break;
      case "/data2":
        res.end(JSON.stringify(DATA2));
        break;
      case "/data3":
        res.end(JSON.stringify(DATA3));
        break;
      case "/data4":
        res.end(JSON.stringify(DATA4));
        break;
      default:
        res.end(JSON.stringify(Error));
        break;
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running`);
  });
