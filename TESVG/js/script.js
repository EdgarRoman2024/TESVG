$(".menu ul li ul").hide(); /* Linea para elimar los submenus */

/* Funcion para que cuando pasemos el maus se vean las opciones */

if ($(window).width() > 900) {
  /* Estas lineas lo que hacen es eliminar todos los eventos al hacer grande la pantalla */
  $(".menu ul li").unbind("click");
  $(".menu ul li ul li").unbind("click");

  /* oculta la ventana lateral al cambiar el tamano  */
  $(".menu ul li ul").hide();

  /* Esta linea ase que cuando pase por ensima de la opcion el mouse desglose las opciones */
  $(".menu ul li").bind("mousemove", function () {
    $(this).children("ul").fadeIn(200);
  });
  /* Esta linea ase que cuando quite de ensima de la opcion el mouse retire el submenu */
  $(".menu ul li").bind("mouseleave", function () {
    $(this).children("ul").fadeOut(200);
  });
} else {
  $(".menu ul li").unbind("mousemove");
  $(".menu ul li").unbind("mouseleave");
  /* Codigo para que en el submenu no se ejecute automaticamente sino hasta darle  un click */
  /* Creamos una variable */
  var show_menu1 = 0;
  /* Esto hace que las opciones del submenu no se abran automaticamente sino con un click   */
  $(".menu ul li").bind("click", function () {
    if (show_menu1 == 0) {
      $(this).children("ul").slideDown();
      show_menu1 = 1;
    } else {
      /* Si es 1 entonces al final que cierre el menu */
      $(this).children("ul").slideUp();
      show_menu1 = 0;
    }
  });
  /* Esta opcion hace que se active la funcion de click en el submenu */
  $(".menu ul li").on("click", function (e) {
    e.stopImmediatePropagation();
  });
}

/* Con este codigo obtenemos el tamano de la pantalla  */
$(window).resize(function () {
  if ($(window).width() > 900) {
    /* Estas lineas lo que hacen es eliminar todos los eventos al hacer grande la pantalla */
    $(".menu ul li").unbind("click");
    $(".menu ul li ul li").unbind("click");

    /* oculta la ventana lateral al cambiar el tamano  */
    $(".menu ul li ul").hide();

    /* Esta linea ase que cuando pase por ensima de la opcion el mouse desglose las opciones */
    $(".menu ul li").bind("mousemove", function () {
      $(this).children("ul").fadeIn(200);
    });
    /* Esta linea ase que cuando quite de ensima de la opcion el mouse retire el submenu */
    $(".menu ul li").bind("mouseleave", function () {
      $(this).children("ul").fadeOut(200);
    });
  } else {
    $(".menu ul li").unbind("mousemove");
    $(".menu ul li").unbind("mouseleave");
    /* Codigo para que en el submenu no se ejecute automaticamente sino hasta darle  un click */
    /* Creamos una variable */
    var show_menu1 = 0;
    /* Esto hace que las opciones del submenu no se abran automaticamente sino con un click   */
    $(".menu ul li").bind("click", function () {
      if (show_menu1 == 0) {
        $(this).children("ul").slideDown();
        show_menu1 = 1;
      } else {
        /* Si es 1 entonces al final que cierre el menu */
        $(this).children("ul").slideUp();
        show_menu1 = 0;
      }
    });
    /* Esta opcion hace que se active la funcion de click en el submenu */
    $(".menu ul li").on("click", function (e) {
      e.stopImmediatePropagation();
    });
  }
});

/* Codigo para activar el heder de color */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 130) {
      $("header").addClass("header2");
    } else {
      $("header").removeClass("header2");
    }
  });
});

/* let menu = document.getElementsByClassName(".menu");*/

window.addEventListener("click", function (e) {
  console.log(e.target);
});

/* Hace que se habra el boton */
/* let menu = document.getElementsByClassName("menu");
let abrir = document.getElementById("open");
let cerrado = true;
function apertura() {
  if (cerrado) {
    menu.style.width = "70vw";
    cerrado = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
  }
}
abrir.addEventListener("click", function () {
  apertura();
}); */

/* Esta funcion hace qeu se desaparezaca el menu pulsando cualquier lado */
/* window.addEventListener("click", function (e) {
  console.log(e.target);
  if (cerrado == false) {
    let span = document.querySelector("span");
    if (e.target !== span && e.target !== abrir) {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      cerrado = true;
    }
  }
}); */
