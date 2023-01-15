const AWS = require('aws-sdk');
const fs  = require('fs');
 
AWS.config.region = 'ap-northeast-2'
 
let s3 = new AWS.S3()
 
async function uploadToStorage(file) {
    let path = file.path
    let name = file.originalname
    let type = file.mimetype
    let image = fs.createReadStream(path)
    
    let parameters = {
        Bucket: 'my-bucket-name',
        Key: name,
        ACL: 'public-read',
        Body: image,
        ContentType: type,
    }
 
    return await s3.upload(parameters, function(err) {
        err ? console.log(err) : false
    }).promise()
}
 
module.exports = { uploadToStorage }