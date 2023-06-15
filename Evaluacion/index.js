/*
Controlador de gastos​
Nos han encargado un controlador de gastos para una aplicación de gestión de finanzas.

El controlador debe permitir como mínimo:

 Añadir un gasto
 Mostrar un listado de gastos
 Editar un gasto
 Eliminar un gasto
Todo esto lo vamos a hacer con JavaScript por supuesto. Como aún no sabemos manipular el DOM (próximo módulo) vamos a hacerlo todo usando la consola del navegador y usando prompt para pedir datos al usuario.

Hay un par de bonus que puedes hacer:

 Los datos de los gastos se guardan en el localStorage para que no se pierdan al recargar la página.
 Cuando lo termines puedes incluir también los ingresos y mostrar un balance de los mismos.
Consejos:

Piensa bien la estructura de datos que vas a usar
Ten en cuenta la experiencia de usuario (que sea "feo" no es un problema, pero que no se pueda usar sí lo es).
Intenta hacerlo lo más modular posible, es decir, que cada función haga una cosa y lo haga bien.

*/

let expenseList = [];

function addSpent() {
  let concepto = prompt("Ingrese el concepto del gasto:");
  let valor = parseInt(prompt("Ingrese el valor del gasto:"));
  let idNuevoItem = expenseList.length
    ? expenseList[expenseList.length - 1].id + 1
    : 1;
  let nuevoGasto = {
    id: idNuevoItem,
    concepto: concepto,
    valor: `$${valor}`,
  };
  expenseList.push(nuevoGasto);
  return expenseList;
}

function showBills() {
  if (expenseList.length == 0) {
    alert("La lista de compras esta vacia");
  } else {
    alert(JSON.stringify(expenseList));
  }
}

function deleteSpent() {
  let numeroId = Number(prompt("Ingrese el ID de la compra a eliminar"));
  let filtrado = expenseList.findIndex((product) => product.id === numeroId);
  if (expenseList.indexOf(expenseList[filtrado]) != -1) {
    let filtro = expenseList.indexOf(expenseList[filtrado]);
    expenseList.splice(filtro, 1);
  } else {
    alert("Numero de ID no encontrado");
  }
  return expenseList;
}

function selectMenu() {
  let menu = Number(
    prompt(`A continuacion ingrese la accion a ejecutar:
   1- Agregar un gasto
   2- Ver historial de gastos
   3- Eliminar gasto por id
   0- Salir`)
  );

  if (menu == 1) {
    addSpent();
  } else if (menu == 2) {
    showBills();
  } else if (menu == 3) {
    deleteSpent();
  } else {
    alert("Ha salido con exito");
  }
}

selectMenu()