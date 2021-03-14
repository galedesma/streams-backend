const Stream = require("../models/stream");

module.exports = {
  getStreams: (req, res) => {
    const streams = Stream.find()
      .then((streams) => {
        res.status(200).json({ streams: streams, count: streams.length });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createStream: (req, res) => {
    const stream = new Stream(req.body);
    console.log("Creando stream", req.body);

    stream.save().then((result) => {
      res.status(200).json({
        stream: result,
      });
    });
  },
};
