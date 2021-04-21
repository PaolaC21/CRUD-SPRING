function eliminar(id) {
	swal({
  title: "Estas seguro de eliminar?",
  text: "Eliminara a la persona de la lista",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
  	$.ajax({
  		url:"/eliminar/"+id,
  		success: function(res) {
  			console.log(res);
  		},
  	});
    swal("¡Tu archivo imaginario ha sido eliminado!", {
      icon: "success",
    }).then((ok)=>{
    	if(ok){
			location.href="/listar";    	
    	}
    });
  } else {
    swal("Persona eliminada correctamente de la lista!");
  }
});
}