const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM carros", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  buscarUm: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM carros WHERE codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },

  // Inserindo veiculo do banco de dados
  inserir: (modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO carros (modelo, placa) VALUES (?, ?)",
        [modelo, placa],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo);
        }
      );
    });
  },

  // Alterando veiculo no banco
  alterar: (codigo, modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?",
        [modelo, placa, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },

  // Deletando veiculo no banco
  deletar: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE from carros WHERE codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
