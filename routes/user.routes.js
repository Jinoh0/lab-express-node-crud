const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");

router.post("/create-user", (req, res) => {
  data.push({ id: uuid(), ...req.body });
  res.status(201).json({ message: "seu elemento foi criado!", data: data });
});

//aqui eh o verbo do insomnia , da requisicao
//no insomnia tem que usar /user/read no caso pra conseguir entrar nessa coisa

router.get("/read-user", (req, res) => {
  return res.status(200).json(data);
});

router.get("/details-user/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDocument) => currentDocument.id === id);

  return res.status(200).json(document[0]);
});

router.put("/edit-user/:id", (req, res) => {
  const { id } = req.params;
  data.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      data[i] = { ...req.body, id: currentDocument.id };
    }
  });
  const newDocument = data.filter(
    (currentDocument) => currentDocument.id === id
  );
  return res.status(200).json(newDocument[0]);
});

router.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDocument) => currentDocument.id === id);
  const index = data.indexOf(document[0]);
  data.splice(index, 1);

  return res.status(200).json(document[0]);
});

module.exports = router;
