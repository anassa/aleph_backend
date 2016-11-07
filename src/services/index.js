'use strict';

const ventas = require('./ventas');

const usuarios = require('./usuarios');

const unidadesDeMedida = require('./unidadesDeMedida');

const tarjetas = require('./tarjetas');

const solicitudes = require('./solicitudes');

const remitos = require('./remitos');

const proveedores = require('./proveedores');

const permisos = require('./permisos');

const ordenesDeCompra = require('./ordenesDeCompra');

const formasDePago = require('./formasDePago');

const cuentas = require('./cuentas');

const clientes = require('./clientes');

const articulos = require('./articulos');

const alarmas = require('./alarmas');

const authentication = require('./authentication');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(alarmas);
  app.configure(articulos);
  app.configure(clientes);
  app.configure(cuentas);
  app.configure(formasDePago);
  app.configure(ordenesDeCompra);
  app.configure(permisos);
  app.configure(proveedores);
  app.configure(remitos);
  app.configure(solicitudes);
  app.configure(tarjetas);
  app.configure(unidadesDeMedida);
  app.configure(usuarios);
  app.configure(ventas);
};
