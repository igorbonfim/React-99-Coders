import React from "react";

function Footer() {
  var ano = new Date().getFullYear();

  return (
    <section id="footer">

      <div>
        <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook fa-2x"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter fa-2x"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-instagram fa-2x"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope fa-2x"></i></a></li>
        </ul>
      </div>
      <a href="mailto:igor@developer.com.br">igor@developer.com.br</a>
      <p>Desenvolvido por Igor Bonfim - {ano}</p>

    </section>
  );
}

export default Footer;
