import * as https from "https";

const options = {
  host: "raw.githubusercontent.com",
  port: 443,
  path: "dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json",
  method: "GET",
  rejectUnauthorized: false,
  requestCert: false,
  agent: false,
};

export const loadCountries = async () => {
  try {
    const countries = await downloadFile(options);
    console.log(countries[0]);
  } catch (e) {
    console.log("Failed to download countries", e);
    process.exit(0);
  }
};

const downloadFile = async (options) => {
  const countries: Array<any> = await new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        const data = Buffer.concat(chunks);
        resolve(JSON.parse(data.toString()));
      });
    });
    req.on("error", (err) => {
      reject(err);
    });
    req.end();
  });

  return countries;
};

loadCountries();
