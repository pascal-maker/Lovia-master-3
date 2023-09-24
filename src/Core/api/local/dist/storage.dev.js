"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Implement These Methods If You Are Adding Your Own Custom Backend
 */
// contents of the file object:
// path	{string}	Selected image location. This is null when the writeTempFile option is set to false.
// localIdentifier(ios only)	{string}	Selected images' localidentifier, used for PHAsset searching
// sourceURL(ios only)	{string}	Selected images' source path, do not have write access
// filename(ios only)	{string}	Selected images' filename
// width	{number}	Selected image width
// height	{number}	Selected image height
// mime	{string}	Selected image MIME type (image/jpeg, image/png)
// size	{number}	Selected image size in bytes
// duration	{number}	Video duration time in milliseconds
// data	{base64}	Optional base64 selected file representation
// exif	{object}	Extracted exif data from image. Response format is platform specific
// cropRect	{object}	Cropped image rectangle (width, height, x, y)
// creationDate (ios only)	{string}	UNIX timestamp when image was created
// modificationDate	{string}	UNIX timestamp when image was last modified

/**
 * This method uploads files and calls the callbacks multiple times, providing the progress percentage
 *
 * @param {object} file
 * @param {function} callbackProgress
 * @param {function} callbackSuccess
 * @param {function} callbackError
 */
var processAndUploadMediaFileWithProgressTracking = function processAndUploadMediaFileWithProgressTracking(file, callbackProgress, callbackSuccess, callbackError) {
  return regeneratorRuntime.async(function processAndUploadMediaFileWithProgressTracking$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // process file (optionally using helper method) and start upload with progress tracking
          // resolve({ downloadURL: downloadURL }); if successful
          // resolve({ error: ErrorCode.photoUploadFailed }); if unsuccessful
          resolve({
            downloadURL: 'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg'
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * processAndUploadMediaFile uploads files without progress tracking
 *
 * @param {object} file an object containing information about the file to be uploaded
 *
 * object format is described above
 *
 *
 */


var processAndUploadMediaFile = function processAndUploadMediaFile(file) {
  return new Promise(function (resolve, _reject) {
    // process file (optionally using helper method) and start upload
    // resolve({ downloadURL: downloadURL }); if successful
    // resolve({ error: ErrorCode.photoUploadFailed }); if unsuccessful
    resolve({
      downloadURL: 'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg'
    });
  });
};

var localStorage = {
  processAndUploadMediaFile: processAndUploadMediaFile,
  processAndUploadMediaFileWithProgressTracking: processAndUploadMediaFileWithProgressTracking
};
var _default = localStorage;
exports["default"] = _default;