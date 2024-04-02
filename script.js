$(document).ready(function () {
  $(".nav-link").click(function () {
    // Remove a classe 'active' de todos os links
    $(".nav-link").removeClass("active");
    // Adiciona a classe 'active' ao link clicado
    $(this).addClass("active");
  });
  new Swiper(".mySwiper", {
    loop: true,
    effect: "fade", // Define o efeito de fade
    fadeEffect: { crossFade: true }, // Ativa o efeito de fade
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });

  $(".cta-banner").on("click", function () {
    alert("você clicou no CTA do banner");
  });

  $(".button-quem-somos").on("click", function () {
    alert("você clicou no Botão de Quem Somos");
  });

  new Swiper(".slider-espaco", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: ".slide-espaco-next",
      prevEl: ".slide-espaco-prev",
    },
  });

  $(".wechat").on("click", function () {
    alert("você clicou no WeChat");
  });

  $(".whatsapp").on("click", function () {
    alert("você clicou no Whatsapp");
  });

  $(".telefone").on("click", function () {
    alert("você clicou no Whatsapp");
  });

  $(".button-submit-form button").click(function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obter os valores dos campos

    var nome = $("#nome").val();
    var email = $("#email").val();
    var assunto = $("#assunto").val();
    var mensagem = $("#textarea").val();

    // Verifica se algum campo está vazio
    if (!nome || !email || !assunto || !mensagem) {
      // Exibe um alerta informando qual campo está vazio
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    $.ajax({
      url: "https://gianfrancopedrol.com.br/backend-mail-newton/envio-form-newton",
      method: "POST",
      data: {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem,
      },
      success: function () {
        alert("Enviado com sucesso!");
        location.reload();
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
