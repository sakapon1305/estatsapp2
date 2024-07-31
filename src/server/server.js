// const express = require("express");
// const fetch = require("node-fetch");
// const cors = require("cors");

// const app = express();
// const port = 3001;

// app.use(cors());

// app.get("/api/data", async (req, res) => {
//   const url =
//     "http://api.e-stat.go.jp/rest/2.0/app/getStatsData?appId=462faf8e9e5899e2545b383e37175fd67fb8c2b0&statsDataId=C0020050213000&cdCat01=%23A03503";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Error Fetching Data" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
