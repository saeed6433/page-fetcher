const request = require('request');
const fs = require('fs');

let input = process.argv

request(input[2], (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  fs.writeFile(input[3], body, err => {
    if(err){
      console.error(err)
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[3]}`)
  })
});