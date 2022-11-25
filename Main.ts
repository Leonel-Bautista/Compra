import { Cliente } from "./Cliente"
import { Pedido } from "./Pedido"
import { Producto } from './Producto';
import { Linea_Producto } from "./Linea_Producto"
import { Carrito_Compra } from "./Carrito_Compra"
import { Pago } from "./Pago"
import { Envio } from "./Envio"

const Leonel = new Cliente(16331,"Lomas del jazmin",2741540034,"leonel@gmail.com")
console.log("-----------------");
console.log(Leonel);
console.log("-----------------");

const pedido_1 = new Pedido(62173,"Calles del Rosario","peido entregado",14/10/2014,"Amazon")
console.log("-----------------");
console.log(pedido_1);
console.log("-----------------");

const producto_1 = new Producto(17313,"Juguete","Juan Carlos")
console.log("-----------------");
console.log(producto_1);
console.log("-----------------");

const Hasbro = new Linea_Producto(5,250)
console.log("-----------------");
console.log(Hasbro);
console.log("-----------------");

const carrito = new Carrito_Compra(20/11/1994)
console.log("-----------------");
console.log(carrito);
console.log("-----------------");

const precio = new Pago(81371,12/10/2022,250)
console.log("-----------------");
console.log(precio);
console.log("-----------------");

const envio = new Envio(78131,81628314,"Lunes 20 de octubre",20/12/20022,"Amazon")
console.log("-----------------");
console.log(envio);
console.log("-----------------");