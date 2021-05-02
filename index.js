const core = require("@actions/core");
const axios = require('axios').default;
const cheerio = require('cheerio');

// const USER = `copas12`;
// const REPO = `build-luna-mobile-action`;
// const TAG = `phone_2021-05-02_04.06`;

const USER = core.getInput("user");
const REPO = core.getInput("repo");
const TAG = core.getInput("tag");
const INDEX = core.getInput("index");


const getHTML = async () => {
   const url = `https://github.com/${USER}/${REPO}/releases/tag/${TAG}`;
   const res = await axios.get(url)
   return res.data
}

const main = async () => {
   const html = await getHTML();
   const $ = cheerio.load(html);
   const urls = [];
   $('.Box--condensed').each((_i1, e1) => {
      $(e1).find('a').each((_i2, e2) => {
         urls.push(`https://github.com${$(e2).attr('href')}`)
      })
   });
   core.setOutput("result", urls[INDEX]);
}

main()