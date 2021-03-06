const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Owners
      .findAll({
        ownerid: req.body.owner
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByOwner: function(req, res) {
    db.Owners
      .findAll({
        ownerid: req.body.owner
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Owners
      .findOne({
        idOwners: req.params.id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Owners
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    const newData = req.body;
    db.Owners
      .update(newData, {where: {id: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Owners
      .destroy({where: { id: req.params.id }})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
