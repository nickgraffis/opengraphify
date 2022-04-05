const urlMetadata = require('url-metadata')

export default function captureImage(url, options?) {
  return urlMetadata(url).then(
    function (metadata) { // success handler
      console.log(metadata)
      return metadata
    },
    function (error) { // failure handler
      console.log(error)
    })
}