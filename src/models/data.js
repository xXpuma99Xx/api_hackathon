const colors = require('colors')

const Broker = require('./tables/Broker')
const BrokerTitulo = require('./tables/BrokerTitulo')
const Instrumento = require('./tables/Instrumento')
const Perfil = require('./tables/Perfil')
const PerfilInstrumento = require('./tables/PerfilInstrumento')
const Titulo = require('./tables/Titulo')

BrokerTitulo.belongsTo(Broker, {
  foreignKey: 'idBroker',
})

BrokerTitulo.belongsTo(Titulo, {
  foreignKey: 'idTitulo',
})

PerfilInstrumento.belongsTo(Perfil, {
  foreignKey: 'idPerfil',
})

PerfilInstrumento.belongsTo(Instrumento, {
  foreignKey: 'idInstrumento',
})

Titulo.belongsTo(Instrumento, {
  foreignKey: 'idInstrumento',
})

const crearBrokers = async () => {
  const data = [
    {
      nombre: 'GBM+',
      link: 'https://plus.gbm.com/',
      descripcion: `GBM Homebroker, es una plataforma digital que sirve de intermediario para comenzar a invertir en la Bolsa de Valores, en este artículo te contamos cómo funciona y cómo duplicar tu dinero.
Cuenta Inversionista: Para usuarios que invierten hasta $1 millón de pesos, la comisión por operación es de 0.25%.
Cuenta Silver: Para inversiones de $1 millón hasta $3 millones de pesos la comisión por operación es de 0.20%.
Cuenta Gold: Para Inversiones de $3 millones a $5 millones de pesos la comisión por operación es de 0.15%.
Cuenta Platinum: Para usuarios con inversiones de $5 millones a $10 millones de pesos, la comisión por operación es de 0.125%
Cuenta Black: Para inversiones superiores a $10 millones de pesos la comisión por operación es de 0.10%`,
    },
    {
      nombre: 'Kuspit',
      link: 'https://kuspit.com/',
      descripcion: `Kuspit es una casa de bolsa 100% digital, primer intermediario para inversionistas en México que opera completamente en línea desde 2011,que ofrece al usuario una plataforma de aprendizaje y un acercamento a una red de inversionistas, autorizado por la Comisión Nacional Bancaria y de Valores (CNBV).
Monto mínimo de inversión: es posible invertir desde $100 pesos.
Comisión por operación: Kuspit cobra 0.40% por este servicio.
Comisión por manejo de cuenta y asesoría: cobra 0.99% anual del valor promedio de tu portafolio.`,
    },
    {
      nombre: 'cetesdirecto',
      link: 'https://www.cetesdirecto.com',
      descripcion: `cetesdirecto® es una plataforma en internet para que cualquier persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de bolsa u otras instituciones.
Tienes acceso a la tasa directa de las subastas del Banco de México, además, es gratuita y no genera comisiones.
Creado por la SHCP y operado por Nafin
Contamos con el respaldo directo del Gobierno de México, a través de la Secretaria de Hacienda y Crédito Público.
Tu cuenta en cetesdirecto® es manejada por Nacional Financiera, S.N.C., institución que opera desde 1934.
Al invertir tus recursos con cetesdirecto®, obtienes la tasa directa de la subasta primaria del Banco de México.
La Comisión Nacional Bancaria y de Valores nos regula, autoriza y supervisa como una entidad del Sistema Financiero Mexicano.`,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    await Broker.create(data[i])
      .then((res) => {
        console.log('Se a insertado correctamente el broker ' + (i + 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const crearInstrumentos = async () => {
  const data = [
    {
      nombre: 'Deuda Gubernamental',
      descripcion: `El Gobierno emite unos documentos llamados títulos de crédito, por los cuales se obliga a pagar una suma de dinero, que es el rendimiento, en un plazo de tiempo determinado. Es igual que cuando nosotros pedimos prestado a nuestros amigos, a nuestros parientes, o al banco.
La Secretaría de Hacienda y Crédito Público (SHCP, o Hacienda) se encarga de vender estos títulos al mejor postor, en una subasta a la que solo acuden los principales participantes del mercado. Estos participantes son las instituciones financieras del país que se han comprometido a comprar en todas las subastas que lanza Hacienda, y de acuerdo a unas condiciones de plazos y tasas de interés que los participantes deben presentar por adelantado. Esas condiciones corresponden a lo que el mercado está dispuesto a recibir, dada su percepción particular de la economía nacional e internacional.`,
    },
    {
      nombre: 'ETF',
      descripcion: `Los ETFs pueden invertir en distintas combinaciones de valores gubernamentales, privados y bancarios, y acciones. También pueden invertir en muchas otras cosas, como por ejemplo en metales preciosos como el oro, o en materias primas como el petróleo. Los ETFs distribuidos por Kuspit son todos los inscritos en el Registro Nacional, que incluyen aquellos que replican ciertos índices o invierten en valores gubernamentales.
Como en el caso de fondo de inversión de renta variable y de deuda, al estar compuesto por muchos títulos, los ETFs se convierten en una herramienta de diversificación, y por tanto de control del riesgo.`,
    },
    {
      nombre: 'Fondos de Renta Variable',
      descripcion: `Las empresas privadas recurren a varias fuentes cuando quieren financiar sus gastos. Las más importantes, por supuesto, son los ingresos que perciben de la venta de sus productos, o de la comercialización de sus servicios. Pero si estos ingresos no son suficientes para crecer, por ejemplo, pueden acudir a un banco para pedir un préstamo, y a cambio pagarán un interés. O pueden recurrir a una bolsa de valores, y ofrecer sus “acciones” en venta.
Una “acción” es una parte de una empresa. Al comprar la acción, el comprador pasa a ser un accionista que se convierte en un “copropietario” de la empresa, y por tanto tiene derecho a los beneficios de la misma de acuerdo al número de acciones que haya comprado. Claro está, también adquiere los riesgos de la empresa, que pueden traducirse en pérdidas en el precio de la acción y, por tanto, una minusvalía en la acción.`,
    },
    {
      nombre: 'Fondos de Deuda',
      descripcion: `El gobierno necesita endeudarse para realizar sus actividades si no tiene suficiente con lo que percibe por los impuestos, porque gracias a esas actividades genera más bienestar a sus ciudadanos, con lo que aumenta su productividad, y esto genera a su vez una mayor recaudación de impuestos en el futuro. Pues bien, las empresas privadas también se endeudan para poder acometer proyectos que les hagan ganar más dinero y mantener contentos a sus socios (quienes siempre quieren ganar más haciendo mejor las cosas).
Cuando el gobierno, o una empresa, emite deuda, ofrece una tasa de interés a un plazo determinado. Si compro esta deuda, mientras la tenga y no la venda hasta su vencimiento, y las empresas y el gobierno sigan pagándolas, recibiré una tasa de interés previamente concertada por cada peso invertido.`,
    },
    {
      nombre: 'Fondos de Cobertura',
      descripcion: `Son instrumentos que permiten al inversionista proteger su dinero contra devaluaciones repentinas de la moneda nacional frente a otras divisas.
Estos fondos de inversión ofrecen un rendimiento y no tienen un plazo de vencimiento fijo. Su objetivo principal es comprar dólares al tipo de cambio fijado por el Banco de México para depositarlos en una chequera de inversiones en México. Por tanto, una de sus características es que experimentan muchas fluctuaciones derivadas de los movimientos del peso frente al dólar.`,
    },
    {
      nombre: 'FIBRAS',
      descripcion: `
      Los Fideicomisos de Infraestructura y Bienes Raíces (Fibras) son instrumentos relativamente nuevos que cotizan en la Bolsa Mexicana de Valores (BMV), y que permiten el financiamiento para la compra o construcción de bienes inmuebles en México.Fibra Uno
Las Fibras son administradas para su arrendamiento, con el derecho a recibir los ingresos provenientes de la renta de los activos, convirtiéndose en un elemento valioso para conformar portafolios de inversión, de acuerdo con información de la BMV.
Con este tipo de instrumento, los inversionistas reciben pagos periódicos, que se obtienen de los arrendamientos, y a su vez tienen la posibilidad de hacerse de ganancias del capital (plusvalía).`,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    await Instrumento.create(data[i])
      .then((res) => {
        console.log('Se a insertado correctamente el instrumento ' + (i + 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const crearPerfiles = async () => {
  const data = [
    {
      nombre: 'Conservador',
      descripcion:
        'Prefiere los rendimientos estables y los plazos cortos. Es adverso al riesgo ( prefiere alejarse de las perdidas, aunque gane un poco menos ). Le gusta saber con la mayor presición posible cuánto ganará al final, porque le permite dormir más tranquilo.',
      calificacion: 40,
    },
    {
      nombre: 'Moderado',
      descripcion: `Tolera los riesgos moderados y le gusta mantener una pequeña parte de sus inversiones líquidas (disponibles a corto plazo) y otra parte mayor a mediano plazo.`,
      calificacion: 19,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    await Perfil.create(data[i])
      .then((res) => {
        console.log('Se a insertado correctamente el perfil ' + (i + 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const crearTitulos = async () => {
  const data = [
    { nombre: 'Cetes', ticket: 'Cetes', idInstrumento: 1 },
    { nombre: 'Bonddia', ticket: 'Bonddia', idInstrumento: 1 },
    { nombre: 'Udibonos', ticket: 'Udibonos', idInstrumento: 1 },
    { nombre: 'Vanguard S&P 500 ETF', ticket: 'VOO', idInstrumento: 2 },
    {
      nombre: 'Vanguard FTSE Emerging Markets ETF',
      ticket: 'VWO',
      idInstrumento: 2,
    },
    {
      nombre: 'Vanguard Information Technology ETF',
      ticket: 'VGT',
      idInstrumento: 2,
    },
    { nombre: 'Microsoft Corporation', ticket: 'MSFT', idInstrumento: 3 },
    { nombre: 'Tesla Inc', ticket: 'TSLA', idInstrumento: 3 },
    { nombre: 'Apple Inc', ticket: 'AAPL', idInstrumento: 3 },
    { nombre: 'SURREAL BOE1', ticket: 'SURREAL BOE1', idInstrumento: 4 },
    { nombre: 'SURREAL BOE2', ticket: 'SURREAL BOE2', idInstrumento: 4 },
    { nombre: 'BNMUDI C0-B', ticket: 'BNMUDI C0-B', idInstrumento: 4 },
    { nombre: 'GBMUSD', ticket: 'GBMUSD', idInstrumento: 5 },
    { nombre: 'TASA USA	', ticket: 'TASA USA	', idInstrumento: 5 },
    { nombre: 'BNMUSLQ', ticket: 'BNMUSLQ', idInstrumento: 5 },
    { nombre: 'Fibra Uno', ticket: 'FUNO11', idInstrumento: 6 },
    { nombre: 'Fibra Mty', ticket: 'FMTY14', idInstrumento: 6 },
    { nombre: 'Fibra Plus REIT', ticket: 'FPLUS16', idInstrumento: 6 },
  ]

  for (let i = 0; i < data.length; i++) {
    await Titulo.create(data[i])
      .then((res) => {
        console.log('Se a insertado correctamente el titulo ' + (i + 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const crearBrokerTitulos = async () => {
  const data = [
    { idBroker: 1, idTitulo: 4 },
    { idBroker: 1, idTitulo: 5 },
    { idBroker: 1, idTitulo: 6 },
    { idBroker: 1, idTitulo: 7 },
    { idBroker: 1, idTitulo: 8 },
    { idBroker: 1, idTitulo: 9 },
    { idBroker: 1, idTitulo: 16 },
    { idBroker: 1, idTitulo: 17 },
    { idBroker: 1, idTitulo: 18 },
    { idBroker: 2, idTitulo: 4 },
    { idBroker: 2, idTitulo: 5 },
    { idBroker: 2, idTitulo: 6 },
    { idBroker: 2, idTitulo: 7 },
    { idBroker: 2, idTitulo: 8 },
    { idBroker: 2, idTitulo: 9 },
    { idBroker: 2, idTitulo: 16 },
    { idBroker: 2, idTitulo: 17 },
    { idBroker: 2, idTitulo: 18 },
    { idBroker: 3, idTitulo: 1 },
    { idBroker: 3, idTitulo: 2 },
    { idBroker: 3, idTitulo: 3 },
  ]

  for (let i = 0; i < data.length; i++) {
    await BrokerTitulo.create(data[i])
      .then((res) => {
        console.log('Se a insertado correctamente broker titulo ' + (i + 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const crearPerfilInstrumentos = async () => {
  const data = [
    {
      porcentajeSinFondo: 50,
      porcentajeConFondo: 40,
      idPerfil: 1,
      idInstrumento: 1,
    },
    {
      porcentajeSinFondo: 30,
      porcentajeConFondo: 25,
      idPerfil: 1,
      idInstrumento: 2,
    },
    {
      porcentajeSinFondo: 20,
      porcentajeConFondo: 15,
      idPerfil: 1,
      idInstrumento: 3,
    },
    {
      porcentajeSinFondo: 35,
      porcentajeConFondo: 25,
      idPerfil: 2,
      idInstrumento: 4,
    },
    {
      porcentajeSinFondo: 35,
      porcentajeConFondo: 30,
      idPerfil: 2,
      idInstrumento: 5,
    },
    {
      porcentajeSinFondo: 30,
      porcentajeConFondo: 25,
      idPerfil: 2,
      idInstrumento: 6,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    await PerfilInstrumento.create(data[i])
      .then((res) => {
        console.log(
          'Se a insertado correctamente el perfil instrumento ' + (i + 1)
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const install = async () => {
  await crearBrokers()
  console.log('\n')

  await crearInstrumentos()
  console.log('\n')

  await crearPerfiles()
  console.log('\n')

  await crearPerfilInstrumentos()
  console.log('\n')

  await crearTitulos()
  console.log('\n')

  await crearBrokerTitulos()
  process.exit()
}

install()
