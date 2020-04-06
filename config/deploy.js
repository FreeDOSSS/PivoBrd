require("dotenv").config();
const path = require("path");
const FtpDeploy = require("ftp-deploy");

const host = process.env.SERVER || null;
const login = process.env.LOGIN || null;
const password = process.env.PASSWORD || null;
const folder = process.env.FOLDER || null;
const ftpDeploy = new FtpDeploy();
const localFolder = path.resolve(__dirname, "..", "build");

console.log("login", login);

if (!host || !login || !password || !folder) {
  console.log("Не найдены переменные");
  process.exit(1);
}

const config = {
  user: login,
  password: password,
  host: host,
  port: 21,
  localRoot: localFolder,
  remoteRoot: folder,
  include: ["*", "**/*", ".*"],
  deleteRemote: true,
  forcePasv: true,
};

console.log("Start uploading!");
ftpDeploy
  .deploy(config)
  .then((res) => console.log("Send end"))
  .catch((err) => console.log(err));

ftpDeploy.on("uploading", function (data) {
  console.log(data.filename);
});

ftpDeploy.on("upload-error", function (data) {
  console.warn(data.err);
});
