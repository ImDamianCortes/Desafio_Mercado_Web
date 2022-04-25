//Importando modulos
const express = require('express');
const app = express();
const chalk = require('chalk');
const exphbs = require('express-handlebars');
const path = require('path');

//Configurando puerto
const port = process.env.PORT || 3002;

//iniciando escucha del servidor
app.listen(port, () => {
    console.log(chalk.green(`\nServer is running on port ${port}\nhttp://localhost:${port}`));
});

//configurando motor de plantillas en la carpeta views
app.engine(
    "hbs",
    exphbs.engine({
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "/views/layout"),
        partialsDir: path.join(__dirname, "/views/partials"),
        extname: ".hbs",
        helpers: {
            bienvenida: () => {
                return "Bienvenido al mercado WEB, seleccione sus productos";
            },
        },
    })
);

//ruta publica
app.use(express.static('public'));

//configurando motor de plantillas
app.set('view engine', '.hbs');

//rutas relativas
app.use("/bootstrap/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/bootstrap/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/fontawesome/js", express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/js"));
//documentacion
app.use("/docs", express.static(__dirname + "/docs"));


const productos = ["banana", "cebollas", "pimenton", "papas", "lechuga", "tomate"];

//rutas de la aplicacion
app.get("/", (req, res) => {
    res.render("Dashboard",
        {
            productos: productos.length > 0 ? productos : false,
        }
    );
});

/*
const carro = [];

app.get("/:producto", (req, res) => {
    const  {producto}  = req.params;
    //console.log(producto)
    if (producto !== "favicon.ico") {
        carro.push(producto);
    }
    //console.log(chalk.blue(`\n${carro}\n`))
    res.render("main", {
        productos: productos.length > 0 ? productos : false,
        carro: carro.length > 0 ? carro : false,
    });
});
*/