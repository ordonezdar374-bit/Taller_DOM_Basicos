function calcularPresupuesto(){
    let ninvitados=parseInt(document.getElementById("numero-inv").value);
    let costo_comida=Number(document.getElementById("cost-comida").value);
    let costo_bebida=Number(document.getElementById("cost-bebida").value);
    let costo_decoracion=Number(document.getElementById("cost-decor").value);
    let costo_musica=Number(document.getElementById("cost-musica").value);
    let propinas=Number(document.getElementById("propina-porc").value);

    let total_comida= costo_comida*ninvitados;
    document.getElementById("comida-total-s").innerText= total_comida;

    let total_bebida= ninvitados*costo_bebida;
    document.getElementById("bebida-total-s").innerText= total_bebida;

    let total_decoracion= ninvitados*costo_decoracion;
    document.getElementById("decoracion").innerText= total_decoracion;

    let total_musica= ninvitados*costo_musica;
    document.getElementById("musica").innerText= total_musica;

    let subtotal= (total_comida+total_bebida+total_decoracion+total_musica);
    document.getElementById("subtotal").innerText= subtotal;
    
    let total_propinas= subtotal*(propinas/100);
    document.getElementById("propina").innerText= total_propinas.toFixed(1);

    let total_general= subtotal+total_propinas;
    document.getElementById("total-general").innerText= total_general.toFixed(1);

    let costo_invitado= total_general/ninvitados;
    document.getElementById("costo-inv").innerText= costo_invitado.toFixed(1);
   
}