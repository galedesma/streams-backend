const Stream = require("../models/stream");

module.exports = {
  //Devuelve todos los streams
  getStreams: (req, res) => {
    const streams = Stream.find()
      .then((streams) => {
        res.status(200).json({ streams: streams, count: streams.length });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //Devuelve un stream en específico
  getStream: (req, res) => {
    const stream = Stream.findById(req.params.id)
      .then((result) => {
        res.status(200).json({ stream: result });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //Crea un nuevo stream
  createStream: (req, res) => {
    const stream = new Stream(req.body);
    console.log("Creando stream", req.body);

    stream
      .save()
      .then((result) => {
        res.status(200).json({
          stream: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //Edita un stream en específico
  editStream: (req, res) => {
    const stream = Stream.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    )
      .then((result) => {
        res.json({ stream: result });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //Borra un stream en específico
  deleteStream: (req, res) => {
    const stream = Stream.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json({ stream: result });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
