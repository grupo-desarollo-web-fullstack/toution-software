import express from "express";
import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../services/db.js";

const matricula = express.Router();

//Obtiene datos
matricula.get("/", async function (req, res) {
  const data = await getDataListFromModel("matricula");
  res.json({
    data,
    status: 200,
  });
});

//Obtiene datos por ID
matricula.get("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getDataUniqueFromModel("matricula", {
    where: {
      matricula_id: +id,
    },
  });
  res.json({
    data,
    status: 200,
  });
});

//Actualiza datos por ID
matricula.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { curso_id, clase_id, estudiante_id } = req.body;
  const data = await updateDataUniqueFromModel("matricula", {
    where: {
      matricula_id: +id,
    },
    data: {
      tbl_estudiante_estudiante_id: +estudiante_id,
      tbl_curso_curso_id: +curso_id,
      tbl_clase_clase_id: +clase_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

//Envia nuevos datos
matricula.post("/", async function (req, res) {
  const { curso_id, clase_id, estudiante_id } = req.body;
  const data = await postDataListFromModel("matricula", {
    data: {
      tbl_estudiante_estudiante_id: +estudiante_id,
      tbl_curso_curso_id: +curso_id,
      tbl_clase_clase_id: +clase_id,
    },
  });
  res.status(201).json({
    data,
    status: 201,
  });
});

export default matricula;
