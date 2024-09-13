var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 13,
  large: 20
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Ce nao ta veia",
      textAlign: "right",
      y: 20,
      x: -40,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Querida Paty Kawasaki.",
      y: 40,
      x: posX + 15,
      duration: 4000
    },
    {
      text: "Ce completa mais um ano de vida",
      id: "sphinx",
      x: posX + 15,
      delay: 1000,
      duration: 4500
    },
    {
      text: "Mais um ano cuidando do TOREBELSON",
      color: "#8e44ad",
      delay: 1000,
      x: posX + 15,
      duration: 4000
    },
    {
      text: "..... e mais um ano de assinatura do Bunker",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX + 15,
      duration: 4500
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Parabens <3",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -3,
      duration: 1500,
      fontSize: fontSize.medium,
      color: "#e74c3c"
    },
    {
      text: "Desejo pro ce Muito dinheiro e menos CLT.",
      y: 40,
      x: posX + 15,
      duration: 4000
    },
    {
      text: "e tambem desejo que ce pare de humilha eu.",
      y: 40,
      x: posX + 15,
      duration: 3500
    },
    {
      text: "Voce e uma pessoa Maravilhosa.",
      id: "end",
      color: "#f9ca24",
      y: 40,
      x: posX + 15,
      duration: 3500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Voce e especial",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Conheci uce no chat do Flow.",
      y: 40,
      x: posX + 15,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "........ e desde entao voce se tornou parte da minha vida",
      y: 20,
      x: posX + 15,
      duration: 5500,
      color: "#30336b",
      fontSize: fontSize.small
    },
    {
      text: "Te amo muito minha fro.",
      y: 10,
      color: "#3f51b5",
      x: posX + 15,
      duration: 1500
    },
    {
      text: "Com amor, Bitzin",
      y: 30,
      color: "#eb4d4b",
      x: posX + 15,
      duration: 1500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});