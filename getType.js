//get type of file by url
function getType(url){
  let type = null
  const formats = {
    "image": ['.png','.jpg','.jpeg','.bmp','.gif','.webp','.webp','.psd'],
    "video": ['.webm', '.mkv', '.flv', '.flv', '.vob', '.ogv, .ogg', '.drc', '.gif', '.gifv', '.mng', '.avi', '.MTS, .M2TS, .TS', '.mov','.qt', '.wmv', '.yuv', '.rm', '.rmvb', '.viv', '.asf', '.amv', '.mp4', '.m4p', '.m4v', '.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mpg', '.mpeg', '.m2v', '.m4v', '.svi', '.3gp', '.3g2', '.mxf', '.roq', '.nsv', '.flv', '.f4v', '.f4p', '.f4a', '.f4b'],
    "audio": ['.3gp', '.aa', '.aac', '.aax', '.act', '.aiff', '.alac', '.amr', '.ape', '.au', '.awb', '.dss', '.flac', '.gsm', '.m4a', '.m4b', '.m4p', '.mp3', '.mpc', '.ogg, .oga, .mogg', '.opus', '.ra, .rm', '.raw', '.rf64', '.sln', '.tta', '.voc', '.vox', '.wav', '.wma', '.wv', '.webm', '.8svx', '.cda'],
    "pdf": [".pdf"]
};
  const extensions = url.match(/(\.\w+)/g)
  const getKey = (v) => {
    Object.entries(formats).forEach(([c, values]) => {
    values.includes(v) ? type = c : null
  });
}
extensions ? extensions.forEach(getKey) : null;
  return type
}
