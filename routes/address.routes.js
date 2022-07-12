const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");

router.post("/create-address", (req, res) => {
  data.push({ id: uuid(), ...req.body });
  res.status(201).json({ message: "seu address foi incluido", data: data });
});

router.get("/read-address", (req, res) => {
  return res.status(200).json(data);
});

router.get("/details-address/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDocument) => currentDocument.id === id);
  return res.status(200).json(document[0]);
});

router.put("/edit-address/:id", (req, res) => {
  const { id } = req.params;
  data.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      data[i] = { ...req.body, id: currentDocument.id };
    }
  });
  const newDocument = data.filter(
    (currentDocument) => (currentDocument.id = id)
  );
  return res.status(200).json(newDocument[0]);
});

router.delete("/delete-address/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDocument) => currentDocument.id === id);
  const index = data.indexOf(document[0]);
  data.splice(index, 1);
  return res.status(200).json(document[0]);
});

module.exports = router;
