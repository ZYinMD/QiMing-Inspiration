const settings = {
  useProductionDB: true,
  dbName: "chinese-name-inspirations",
  productionUsername: "admin",
  productionPassword: "v687",
};

// if deployed to app engine:
if (process.env.GOOGLE_CLOUD_PROJECT === "chinese-name-inspirations") {
  settings.useProductionDB = true;
}

exports.GETdbURI = function () {
  if (settings.useProductionDB) {
    return `mongodb+srv://${settings.productionUsername}:${settings.productionPassword}@cluster0.by2rw.mongodb.net/${settings.dbName}?retryWrites=true&w=majority`; // copied from code samples from https://cloud.mongodb.com/
  } else return "mongodb://localhost:27017/" + settings.dbName;
};
