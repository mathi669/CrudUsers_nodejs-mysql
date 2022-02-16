const conexion = require("../database/db");

exports.save = (req, res) => {
  const user = req.body.user;
  const rol = req.body.rol;
  const edad = req.body.edad;
  const email = req.body.email;
  const salario = req.body.salario;

  conexion.query(
    "INSERT INTO users SET ?",
    { user: user, rol: rol, edad: edad, email: email, salario: salario },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
};

exports.update = (req, res) => {
  const id = req.body.id;
  const user = req.body.user;
  const rol = req.body.rol;
  const edad = req.body.edad;
  const email = req.body.email;
  const salario = req.body.salario;

  conexion.query(
    "UPDATE users SET ? WHERE id = ?",
    [
      {
        user: user,
        rol: rol,
        edad: edad,
        email: email,
        salario: salario,
      }, id
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
};
