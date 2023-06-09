const CarroService = require("../services/CarroService");

module.exports = {
  // Buscando todos os carros
  buscarTodos: async (req, res) => {
    let json = {
      error: "",
      result: [],
    };

    let carros = await CarroService.buscarTodos();

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
        placa: carros[i].placa,
      });
    }
    res.json(json);
  },

  // Buscando um unico carro
  buscarUm: async(req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let codigo = req.params.codigo;
    let carro  = await CarroService.buscarUm(codigo);

    if(carro){
      json.result = carro;
    }

    res.json(json);
  },

  //
  inserir: async(req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if(modelo && placa){
      let CarroCodigo  = await CarroService.inserir(modelo, placa);
      json.result = {
        codigo: CarroCodigo,
        modelo,
        placa
      };
    }


    else {
      json.error = "Campos não enviados!";
    }

    res.json(json);
  },

  // Alterar
  alterar: async(req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa  = req.body.placa;

    if(modelo && placa && codigo){
      await CarroService.alterar(codigo, modelo, placa);
      json.result = {
        codigo,
        modelo,
        placa
      };
    }


    else {
      json.error = "Campos não enviados!";
    }

    res.json(json);
  },

  // Deletar
  deletar: async(req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let codigo = req.params.codigo;

    if(codigo){
      await CarroService.deletar(codigo);
      json.result = {
        codigo,
      };
    }

    else {
      json.error = "Campos não enviados!";
    }

    res.json(json);
  },
};
