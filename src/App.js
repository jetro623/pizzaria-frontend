import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Removido - Cardápio será local

import stylesCabecalho from './modules/Cabecalho.module.css'; 
import stylesSecaoDestaque from './modules/SecaoDestaque.module.css'; 
import stylesCartaoProduto from './modules/CartaoProduto.module.css'; 
import stylesListaProdutos from './modules/ListaProdutos.module.css'; 
import stylesCartaoBebida from './modules/CartaoBebida.module.css'; 
import stylesListaBebidas from './modules/ListaBebidas.module.css'; 
import stylesSecaoSobre from './modules/SecaoSobre.module.css';     
import stylesSecaoContato from './modules/SecaoContato.module.css'; 
import stylesRodape from './modules/Rodape.module.css';         
import stylesModalCarrinho from './modules/ModalCarrinho.module.css'; 
import stylesApp from './modules/App.module.css'; 

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'; // Comentado

const Cabecalho = ({ itensNoCarrinho, aoAbrirCarrinho }) => {
  const [menuAberto, definirMenuAberto] = useState(false);

  const alternarMenuMobile = () => {
    definirMenuAberto(!menuAberto);
  };

  const totalItens = itensNoCarrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <header className={stylesCabecalho.cabecalhoPrincipal}>
      <div className={stylesCabecalho.container}>
        <a href="#inicio" className={stylesCabecalho.logoContainer}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png" 
            alt="Escudo do Santos FC - Logo Pizzaria do Peixão" 
            className={stylesCabecalho.logoImagem}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/60x60/000000/FFFFFF?text=SFC&font=oswald'; }}
          />
          <span className={stylesCabecalho.logoTexto}>Pizzaria do Peixão</span>
        </a>
        <nav className={stylesCabecalho.navegacaoPrincipal}>
          <a href="#inicio" className={stylesCabecalho.linkNavegacao}>Início</a>
          <a href="#cardapio" className={stylesCabecalho.linkNavegacao}>Pizzas</a>
          <a href="#bebidas" className={stylesCabecalho.linkNavegacao}>Bebidas</a>
          <a href="#historia" className={stylesCabecalho.linkNavegacao}>Nossa História</a>
          <a href="#contato" className={stylesCabecalho.linkNavegacao}>Contato</a>
        </nav>
        <div className={stylesCabecalho.menuDireita}>
          <button onClick={aoAbrirCarrinho} aria-label="Carrinho de Compras" className={stylesCabecalho.botaoCarrinho}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalItens > 0 && (
              <span className={stylesCabecalho.contadorCarrinho}>
                {totalItens}
              </span>
            )}
          </button>
          <button className={stylesCabecalho.botaoMenuMobile} aria-label="Abrir Menu" onClick={alternarMenuMobile}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      {menuAberto && (
        <div className={stylesCabecalho.dropdownMenuMobile}>
          <a href="#inicio" className={stylesCabecalho.linkDropdown} onClick={alternarMenuMobile}>Início</a>
          <a href="#cardapio" className={stylesCabecalho.linkDropdown} onClick={alternarMenuMobile}>Pizzas</a>
          <a href="#bebidas" className={stylesCabecalho.linkDropdown} onClick={alternarMenuMobile}>Bebidas</a>
          <a href="#historia" className={stylesCabecalho.linkDropdown} onClick={alternarMenuMobile}>Nossa História</a>
          <a href="#contato" className={stylesCabecalho.linkDropdown} onClick={alternarMenuMobile}>Contato</a>
        </div>
      )}
    </header>
  );
};

const slidesCarrossel = [
  {
    id: 1,
    imagemUrl: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80',
    titulo: 'Pizzaria do Peixão',
    subtitulo: 'A tradição do sabor, com a força do Alvinegro Praiano.',
    textoBotao: 'Ver Cardápio',
    linkBotao: '#cardapio',
  },
  {
    id: 3, 
    imagemUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80',
    titulo: 'Ingredientes Frescos',
    subtitulo: 'Qualidade e sabor que você sente em cada fatia.',
    textoBotao: 'Nossa História',
    linkBotao: '#historia',
  },
];

const SecaoDestaque = () => {
  const [slideAtual, definirSlideAtual] = useState(0);

  const proximoSlide = () => {
    definirSlideAtual((slideAnterior) => (slideAnterior === slidesCarrossel.length - 1 ? 0 : slideAnterior + 1));
  };

  const slideAnterior = () => {
    definirSlideAtual((slideAnterior) => (slideAnterior === 0 ? slidesCarrossel.length - 1 : slideAnterior - 1));
  };
  
  useEffect(() => {
    if (slidesCarrossel.length > 1) { 
      const intervalo = setInterval(proximoSlide, 7000); 
      return () => clearInterval(intervalo); 
    }
  }, []); 


  if (slidesCarrossel.length === 0) {
    return ( 
        <section id="inicio" className={stylesSecaoDestaque.secaoDestaqueFallback}> 
            <div>
                <h1 className={stylesSecaoDestaque.tituloFallback}>Bem-vindo à Pizzaria do Peixão!</h1>
                <p className={stylesSecaoDestaque.subtituloFallback}>O melhor sabor da cidade.</p>
            </div>
        </section>
    );
  }
  
  const slideValido = slideAtual < slidesCarrossel.length ? slideAtual : 0;
  const slideSelecionado = slidesCarrossel[slideValido];


  return (
    <section id="inicio" className={stylesSecaoDestaque.secaoDestaque}> 
      <div
        className={stylesSecaoDestaque.imagemFundoSlide} 
        style={{ backgroundImage: `url('${slideSelecionado.imagemUrl}')` }}
        key={slideSelecionado.id} 
      >
        <div className={stylesSecaoDestaque.overlayEscuro}></div> 
      </div>

      <div className={stylesSecaoDestaque.conteudoSlide}> 
        <h1 className={stylesSecaoDestaque.tituloPrincipal}> 
          {slideSelecionado.titulo}
        </h1>
        <p className={stylesSecaoDestaque.subtitulo}> 
          {slideSelecionado.subtitulo}
        </p>
        <a
          href={slideSelecionado.linkBotao}
          className={stylesSecaoDestaque.botaoAcao} 
        >
          {slideSelecionado.textoBotao}
        </a>
      </div>
      
      {slidesCarrossel.length > 1 && ( 
        <>
          <button 
            onClick={slideAnterior} 
            className={`${stylesSecaoDestaque.botaoNavegacao} ${stylesSecaoDestaque.botaoAnterior}`}
            aria-label="Slide Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button 
            onClick={proximoSlide} 
            className={`${stylesSecaoDestaque.botaoNavegacao} ${stylesSecaoDestaque.botaoProximo}`} 
            aria-label="Próximo Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className={stylesSecaoDestaque.indicadoresContainer}> 
            {slidesCarrossel.map((_, indice) => (
              <button
                key={_.id}
                onClick={() => definirSlideAtual(indice)}
                className={`${stylesSecaoDestaque.indicador} ${slideValido === indice ? stylesSecaoDestaque.indicadorAtivo : ''}`} 
                aria-label={`Ir para o slide ${indice + 1}`}
              ></button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};


const CartaoProduto = ({ produto, aoAdicionarAoCarrinho }) => {
  const precoValido = (produto && typeof produto.preco === 'number') ? produto.preco : 0;
  const nomeProduto = (produto && produto.nome) ? produto.nome : "Produto Indisponível";
  const descricaoProduto = (produto && produto.descricao) ? produto.descricao : "Descrição não disponível.";
  const imagemUrlProduto = (produto && produto.imagemUrl) ? produto.imagemUrl : `https://placehold.co/400x300/E0E0E0/000000?text=Imagem+Indisponível&font=roboto`;


  return (
    <div className={stylesCartaoProduto.cartao}>
      <img 
        src={imagemUrlProduto}
        alt={`[Imagem de ${nomeProduto}]`}
        className={stylesCartaoProduto.imagem}
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/E0E0E0/000000?text=${encodeURIComponent(nomeProduto)}&font=roboto`; }}
      />
      <div className={stylesCartaoProduto.conteudo}>
        <h3 className={stylesCartaoProduto.nome}>{nomeProduto}</h3>
        <p className={stylesCartaoProduto.descricao}>{descricaoProduto}</p>
        <p className={stylesCartaoProduto.preco}>R$ {precoValido.toFixed(2)}</p>
        <button 
          onClick={() => aoAdicionarAoCarrinho(produto)}
          className={stylesCartaoProduto.botaoAdicionar}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

const ListaProdutos = ({ aoAdicionarAoCarrinho }) => {
  const pizzas = [ 
    { _id: 'pizza1', id: 'pizza1', nome: 'Margherita', descricao: 'Molho de tomate fresco, mozzarella de búfala, manjericão e um fio de azeite.', preco: 45.00, imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4x-A-TPbtRaUGP1uXouP48Ouhi4gojOPyECJrwxKRPaHuDrx5RLy6X-3KEkoJ' },
    { _id: 'pizza2', id: 'pizza2', nome: 'Pepperoni', descricao: 'Coberta com generosas fatias de pepperoni e queijo mozzarella derretido.', preco: 50.00, imagemUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCLfJVMR3F9mSgjCkNQSHeGWc5JnZ3Hu-V7Ta9KVpqCH5evoH36JnZ7XkS0n7k' },
    { _id: 'pizza3', id: 'pizza3', nome: 'Quatro Queijos', descricao: 'Uma combinação perfeita de mozzarella, provolone, parmesão e gorgonzola.', preco: 52.00, imagemUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQzZLP40V1-DAK2XNAAiORM4DOO1wWDu1Te1HWvElqcQ5v78u5VZAssLMN4n0BB' },
    { _id: 'pizza4', id: 'pizza4', nome: 'Frango com Catupiry', descricao: 'Frango desfiado temperado coberto com o autêntico Catupiry e orégano.', preco: 49.00, imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9g8pic3e7HfOVM5Fz0fPuXXByEQfCWVB70yz8BhVLLrCgA4xKDwaUes02Wrs4' },
    { _id: 'pizza5', id: 'pizza5', nome: 'Calabresa', descricao: 'Linguiça calabresa de primeira qualidade fatiada, rodelas de cebola e azeitonas pretas.', preco: 48.00, imagemUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWBGDH-8lCh2TbqnPNr-s7nDnsKy5IVz5IBFYkEHENpZY2bqJb12jC4KD-693T' },
    { _id: 'pizza6', id: 'pizza6', nome: 'Portuguesa', descricao: 'Presunto, queijo mozzarella, ovos cozidos, cebola, pimentão, azeitonas e orégano.', preco: 55.00, imagemUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBCyPcwRZ2mQH52tdOJpRAPK9mXUrfqAvtYpUsPhFbTffrwTZBPUOaDE0ZaASt' },
    { _id: 'pizza7', id: 'pizza7', nome: 'Vegetariana', descricao: 'Mix de legumes frescos: abobrinha, berinjela, pimentões coloridos, champignon e azeitonas.', preco: 50.00, imagemUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTey6ZzVjNPu13XktSQokRkMzUyJEIFATtLIl768-iDOHjnf_7Id6T_-Xq4OtzG' },
    { _id: 'pizza8', id: 'pizza8', nome: 'Atum com Cebola', descricao: 'Atum sólido de alta qualidade com rodelas de cebola fresca e azeitonas.', preco: 53.00, imagemUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPtjSDJAR6Xx-Zd8F-DXVfIxn3LFWjATQM7bhdOxfmxfPAewWJKgsa7YzTMxew' },
  ];

  if (pizzas.length === 0) return <p className={stylesListaProdutos.mensagemStatus}>Nenhuma pizza disponível no momento. Verifique o cardápio mais tarde!</p>;

  return (
    <section id="cardapio" className={stylesListaProdutos.secaoCardapio}>
      <div className={stylesListaProdutos.container}>
        <h2 className={stylesListaProdutos.tituloSecao}>
          Nossas Pizzas Tradicionais
        </h2>
        <div className={stylesListaProdutos.gridProdutos}>
          {pizzas.map(pizza => ( 
            <CartaoProduto key={pizza.id} produto={pizza} aoAdicionarAoCarrinho={aoAdicionarAoCarrinho} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CartaoBebida = ({ bebida, aoAdicionarAoCarrinho }) => {
  const precoValido = (bebida && typeof bebida.preco === 'number') ? bebida.preco : 0;
  const nomeBebida = (bebida && bebida.nome) ? bebida.nome : "Bebida Indisponível";
  const volumeBebida = (bebida && bebida.volume) ? bebida.volume : "";
  const imagemUrlBebida = (bebida && bebida.imagemUrl) ? bebida.imagemUrl : `https://placehold.co/150x200/E0E0E0/000000?text=Bebida&font=roboto`;

  return (
    <div className={stylesCartaoBebida.cartao}>
      <img 
        src={imagemUrlBebida}
        alt={`[Imagem de ${nomeBebida}]`}
        className={stylesCartaoBebida.imagem}
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/150x200/E0E0E0/000000?text=${encodeURIComponent(nomeBebida)}&font=roboto`; }}
      />
      <h3 className={stylesCartaoBebida.nome}>{nomeBebida}</h3>
      <p className={stylesCartaoBebida.volume}>{volumeBebida}</p>
      <p className={stylesCartaoBebida.preco}>R$ {precoValido.toFixed(2)}</p>
      <button 
        onClick={() => aoAdicionarAoCarrinho(bebida)}
        className={stylesCartaoBebida.botaoAdicionar}>
        Adicionar
      </button>
    </div>
  );
};

const ListaBebidas = ({ aoAdicionarAoCarrinho }) => {
 const bebidas = [ 
    { _id: 'bebida101', id: 'bebida101', nome: 'Coca-Cola', volume: 'Lata 350ml', preco: 6.00, imagemUrl: 'https://prezunic.vtexassets.com/arquivos/ids/210693/66db573a62edc14e790f8550.jpg?v=638612475473130000' },
    { _id: 'bebida107', id: 'bebida107', nome: 'Coca-Cola', volume: 'Garrafa 2L', preco: 12.00, imagemUrl: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/1884-refrigerante-coca-cola-2l.jpg' },
    { _id: 'bebida102', id: 'bebida102', nome: 'Coca-Cola Zero', volume: 'Lata 350ml', preco: 6.00, imagemUrl: 'https://www.cantinacheirodepizza.com.br/content/images/thumbs/0000260_coca-cola-zero-350ml_800.png' },
    { _id: 'bebida108', id: 'bebida108', nome: 'Coca-Cola Zero', volume: 'Garrafa 2L', preco: 12.00, imagemUrl: 'https://www.clubeextra.com.br/img/uploads/1/913/24935913.jpg' },
    { _id: 'bebida103', id: 'bebida103', nome: 'Guaraná Antarctica', volume: 'Lata 350ml', preco: 5.50, imagemUrl: 'https://superprix.vteximg.com.br/arquivos/ids/202793-600-600/95685132ceb9cbf4f98a78d82f6228c6_refrigerante-guarana-antarctica-350ml--lata-_lett_1.jpg?v=637686071316470000' },
    { _id: 'bebida109', id: 'bebida109', nome: 'Guaraná Antarctica', volume: 'Garrafa 2L', preco: 11.00, imagemUrl: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/1885-refrigerante-guarana-antarctica-2l.20250131112123.jpg' },
    { _id: 'bebida104', id: 'bebida104', nome: 'Fanta Laranja', volume: 'Lata 350ml', preco: 5.50, imagemUrl: 'https://andinacocacola.vtexassets.com/arquivos/ids/158548/Fanta-Laranja-350ml.jpg?v=638659856775830000' },
    { _id: 'bebida110', id: 'bebida110', nome: 'Fanta Laranja', volume: 'Garrafa 2L', preco: 11.00, imagemUrl: 'https://zaffari.vtexassets.com/arquivos/ids/262965/1010783-00.jpg?v=638671108395570000' },
    { _id: 'bebida105', id: 'bebida105', nome: 'Sprite', volume: 'Lata 350ml', preco: 5.50, imagemUrl: 'https://www.clubeextra.com.br/img/uploads/1/759/25309759x200x200.png' },
    { _id: 'bebida106', id: 'bebida106', nome: 'Cerveja Heineken', volume: 'Long Neck 330ml', preco: 9.00, imagemUrl: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/222-cerveja-heineken-long-neck-330ml.jpg' },
  ];

   if (bebidas.length === 0) return <p className={stylesListaBebidas.mensagemStatus}>Nenhuma bebida disponível no momento. Verifique o cardápio mais tarde!</p>;


  return (
    <section id="bebidas" className={stylesListaBebidas.secaoBebidas}>
      <div className={stylesListaBebidas.container}>
        <h2 className={stylesListaBebidas.tituloSecao}>
          Para Refrescar
        </h2>
        <div className={stylesListaBebidas.gridBebidas}>
          {bebidas.map(bebida => ( 
            <CartaoBebida key={bebida.id} bebida={bebida} aoAdicionarAoCarrinho={aoAdicionarAoCarrinho} />
          ))}
        </div>
      </div>
    </section>
  );
};


const SecaoSobre = () => {
  return (
    <section id="historia" className={stylesSecaoSobre.secaoSobre}>
      <div className={stylesSecaoSobre.container}>
        <div className={stylesSecaoSobre.colunaImagem}>
          <img 
            src="https://preview.redd.it/fs0bx1fc8c4f1.png?width=640&crop=smart&auto=webp&s=97d42987bfa33f8ec1f7d6748d6e76ed9bb465b3" 
            alt="[Imagem de Cozinha industrial da Pizzaria do Peixão]" 
            className={stylesSecaoSobre.imagemCozinha}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450/E0E0E0/000000?text=Nossa+Cozinha&font=roboto'; }}
          />
        </div>
        <div className={stylesSecaoSobre.colunaTexto}>
          <h2 className={stylesSecaoSobre.titulo}>Nossa História, Nossa Paixão</h2>
          <p className={stylesSecaoSobre.paragrafo}>
            A Pizzaria do Peixão nasceu da união de duas grandes paixões: a arte da pizza artesanal e o amor incondicional pelo Santos Futebol Clube. 
            Fundada por torcedores fanáticos, nossa missão é trazer para a sua mesa pizzas com sabor de vitória, preparadas com os melhores ingredientes e a garra que só o Peixão tem.
          </p>
          <p className={stylesSecaoSobre.paragrafo}>
            Cada pizza em nosso cardápio é uma homenagem aos ídolos e momentos gloriosos do Alvinegro Praiano. 
            Utilizamos massa de fermentação natural, molho de tomate caseiro e ingredientes frescos, garantindo uma experiência única e saborosa.
          </p>
          <p className={stylesSecaoSobre.paragrafo}>
            Mais que uma pizzaria, somos um ponto de encontro para a nação santista celebrar e saborear.
          </p>
        </div>
      </div>
    </section>
  );
};

const SecaoContato = () => {
  const aoEnviarFormulario = (evento) => {
    evento.preventDefault();
    const formulario = evento.target;
    const divMensagem = document.getElementById('mensagem-formulario-peixao');
    if (divMensagem) {
        divMensagem.textContent = 'Mensagem enviada! Em breve, um de nossos artilheiros entrará em contato. (Simulação)';
        divMensagem.className = `${stylesSecaoContato.mensagemFormulario} ${stylesSecaoContato.mensagemSucesso}`;
        formulario.reset();
    } else {
        console.warn("Elemento 'mensagem-formulario-peixao' não encontrado.");
    }
  };

  return (
    <section id="contato" className={stylesSecaoContato.secaoContato}>
      <div className={stylesSecaoContato.container}>
        <h2 className={stylesSecaoContato.tituloSecao}>Fale com o Peixão</h2>
        <div className={stylesSecaoContato.formularioContainer}>
          <form onSubmit={aoEnviarFormulario}>
            <div className={stylesSecaoContato.grupoFormulario}>
              <label htmlFor="nome-contato" className={stylesSecaoContato.labelFormulario}>Seu Nome</label>
              <input type="text" id="nome-contato" name="nomeContato" required className={stylesSecaoContato.inputFormulario}/>
            </div>
            <div className={stylesSecaoContato.grupoFormulario}>
              <label htmlFor="email-contato" className={stylesSecaoContato.labelFormulario}>Seu Email</label>
              <input type="email" id="email-contato" name="emailContato" required className={stylesSecaoContato.inputFormulario}/>
            </div>
            <div className={stylesSecaoContato.grupoFormulario}>
              <label htmlFor="mensagem-contato" className={stylesSecaoContato.labelFormulario}>Sua Mensagem</label>
              <textarea id="mensagem-contato" name="mensagemContato" rows="5" required className={stylesSecaoContato.textareaFormulario}></textarea>
            </div>
            <button type="submit" className={stylesSecaoContato.botaoEnviar}>
              Enviar para o Gol!
            </button>
            <div id="mensagem-formulario-peixao" className={stylesSecaoContato.mensagemFormulario}></div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Rodape = () => {
  return (
    <footer className={stylesRodape.rodapePrincipal}>
      <div className={stylesRodape.container}>
        <div className={stylesRodape.logoContainerRodape}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png" 
            alt="Escudo do Santos FC" 
            className={stylesRodape.escudoRodape}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/000000/FFFFFF?text=SFC&font=oswald'; }}
          />
          <span className={stylesRodape.nomePizzariaRodape}>Pizzaria do Peixão</span>
        </div>
        <p className={stylesRodape.copyright}>&copy; {new Date().getFullYear()} Pizzaria do Peixão. Orgulhosamente Alvinegra.</p>
        <p className={stylesRodape.infoContato}>Rua da Vila Belmiro, 1912 - Santos - SP</p>
        <p className={`${stylesRodape.infoContato} ${stylesRodape.infoContatoComMargem}`}>Telefone: (13) 3257-1912</p>
        <div className={stylesRodape.redesSociais}>
          <a href="#instagram" aria-label="Instagram da Pizzaria do Peixão" className={stylesRodape.linkRedeSocial}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#facebook" aria-label="Facebook da Pizzaria do Peixão" className={stylesRodape.linkRedeSocial}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
           <a href="#whatsapp" aria-label="Whatsapp da Pizzaria do Peixão" className={stylesRodape.linkRedeSocial}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.85L2.05 22l5.25-1.38c1.41.72 3 .95 4.74.95h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2M12.04 3.64c4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27h-.01c-1.48 0-2.94-.39-4.22-1.12l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.42c0-4.56 3.71-8.27 8.27-8.27m4.53 10.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.56.06s-1.17-.43-2.23-1.37c-.83-.74-1.38-1.65-1.54-1.92s0-.42.11-.55c.1-.12.25-.29.37-.44s.17-.25.25-.42c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.66 4.27 3.78 2.51 1.12 2.51.75 2.96.7s1.39-.57 1.58-1.12.19-1.02.13-1.12c-.06-.11-.23-.18-.48-.3Z"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const ModalCarrinho = ({ 
  mostrar, 
  aoFechar, 
  itensDoCarrinho, 
  aoAtualizarQuantidade, 
  aoRemoverItem,
  etapaCheckout,
  definirEtapaCheckout,
  opcaoEntrega,
  definirOpcaoEntrega,
  endereco,
  aoMudarEndereco,
  formaPagamento,
  definirFormaPagamento,
  aoConfirmarPedido,
  trocoPara,
  aoMudarTrocoPara
}) => {
  if (!mostrar) {
    return null;
  }

  const calcularSubtotal = (item) => (typeof item.preco === 'number' ? item.preco : 0) * item.quantidade;
  const calcularTotalGeral = () => itensDoCarrinho.reduce((total, item) => total + calcularSubtotal(item), 0);

  const lidarComEnvioEndereco = (e) => {
    e.preventDefault();
    definirEtapaCheckout('formaPagamento'); 
  }

  const copiarCodigoPix = () => {
    const codigo = "00020126330014BR.GOV.BCB.PIX011112345678901520400005303986540510.005802BR5913PizzariaPeixao6009SAO PAULO62070503***6304ABCD"; 
    navigator.clipboard.writeText(codigo).then(() => {
      console.log("Código PIX copiado!");
    }).catch(err => {
      console.error("Erro ao copiar código PIX:", err);
    });
  }


  const renderizarConteudoModal = () => {
    switch (etapaCheckout) {
      case 'entregaRetirada':
        return (
          <div className={stylesModalCarrinho.etapaContainer}>
            <h3 className={stylesModalCarrinho.tituloEtapa}>Como você quer receber seu pedido?</h3>
            <div className={stylesModalCarrinho.botoesContainer}>
              <button 
                onClick={() => { definirOpcaoEntrega('delivery'); definirEtapaCheckout('endereco'); }}
                className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoPrimario}`}
              >
                Delivery (Entrega)
              </button>
              <button 
                onClick={() => { definirOpcaoEntrega('pickup'); definirEtapaCheckout('formaPagamento'); }} 
                className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario}`}
              >
                Retirar na Loja
              </button>
            </div>
          </div>
        );
      case 'endereco': 
        return (
          <form onSubmit={lidarComEnvioEndereco} className={stylesModalCarrinho.etapaContainer}>
            <h3 className={stylesModalCarrinho.tituloEtapa}>Endereço de Entrega</h3>
            <div className={stylesModalCarrinho.grupoFormulario}>
                <label htmlFor="nomeCliente" className={stylesModalCarrinho.labelFormulario}>Nome Completo</label>
                <input type="text" name="nomeCliente" id="nomeCliente" value={endereco.nomeCliente} onChange={aoMudarEndereco} placeholder="Seu nome completo" required className={stylesModalCarrinho.inputFormulario}/>
            </div>
            <div className={stylesModalCarrinho.gridDoisColunas}>
              <input type="text" name="rua" value={endereco.rua} onChange={aoMudarEndereco} placeholder="Rua / Avenida" required className={stylesModalCarrinho.inputFormulario}/>
              <input 
                type="text" 
                name="numero" 
                value={endereco.numero} 
                onChange={(e) => {
                    const { name, value } = e.target;
                    const valorFiltrado = value.replace(/[^0-9]/g, '');
                    aoMudarEndereco({ target: { name, value: valorFiltrado } });
                }}
                placeholder="Número" required className={stylesModalCarrinho.inputFormulario}/>
              <input type="text" name="bairro" value={endereco.bairro} onChange={aoMudarEndereco} placeholder="Bairro" required className={stylesModalCarrinho.inputFormulario}/>
              <input type="text" name="cidade" value={endereco.cidade} onChange={aoMudarEndereco} placeholder="Cidade" required className={stylesModalCarrinho.inputFormulario}/>
              <input 
                type="text" 
                name="cep" 
                value={endereco.cep} 
                maxLength="9" 
                onChange={(e) => {
                    const { name, value } = e.target;
                    let valorFiltrado = value.replace(/[^0-9]/g, '');
                    if (valorFiltrado.length > 5) {
                        valorFiltrado = valorFiltrado.slice(0,5) + '-' + valorFiltrado.slice(5,8)
                    }
                    aoMudarEndereco({ target: { name, value: valorFiltrado } });
                }}
                placeholder="CEP (somente números)" required className={stylesModalCarrinho.inputFormulario}/>
              <input type="text" name="complemento" value={endereco.complemento} onChange={aoMudarEndereco} placeholder="Complemento (opcional)" className={stylesModalCarrinho.inputFormulario}/>
            </div>
            <div className={stylesModalCarrinho.botoesNavegacao}>
              <button type="button" onClick={() => definirEtapaCheckout('entregaRetirada')} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario}`}>Voltar</button>
              <button type="submit" className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoPrimario}`}>Próximo</button>
            </div>
          </form>
        );
      case 'formaPagamento':
        const metodosPagamento = [
            { label: 'PIX', value: 'PIX (QR Code Online)' },
            { label: 'Dinheiro', value: opcaoEntrega === 'delivery' ? 'Dinheiro (na entrega)' : 'Dinheiro (na retirada)' },
            { label: 'Maquininha', value: opcaoEntrega === 'delivery' ? 'Maquininha (na entrega)' : 'Maquininha (na retirada)' }
        ];
        return (
            <div className={stylesModalCarrinho.etapaContainer}>
                <h3 className={stylesModalCarrinho.tituloEtapa}>Escolha a forma de pagamento:</h3>
                <div className={stylesModalCarrinho.opcoesPagamentoContainer}>
                    {metodosPagamento.map(metodo => (
                        <button 
                        key={metodo.value}
                        onClick={() => { 
                            definirFormaPagamento(metodo.value); 
                            if (metodo.value === 'PIX (QR Code Online)') {
                                definirEtapaCheckout('pagamento_online_pix_qrcode');
                            } else if (metodo.value.includes('Dinheiro')) {
                                definirEtapaCheckout('dinheiro_troco');
                            } else { 
                                definirEtapaCheckout('confirmacao');
                            }
                        }}
                        className={`${stylesModalCarrinho.botaoOpcaoPagamento} ${formaPagamento === metodo.value ? stylesModalCarrinho.botaoOpcaoPagamentoSelecionado : ''}`}
                        >
                        {metodo.label} 
                        </button>
                    ))}
                </div>
                <button onClick={() => definirEtapaCheckout(opcaoEntrega === 'delivery' ? 'endereco' : 'entregaRetirada')} 
                        className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario} ${stylesModalCarrinho.botaoVoltarPequeno}`}>Voltar</button>
            </div>
        );
    case 'pagamento_online_pix_qrcode':
        return (
            <div className={`${stylesModalCarrinho.etapaContainer} ${stylesModalCarrinho.etapaCentralizada}`}>
                <h3 className={stylesModalCarrinho.tituloEtapa}>Pagamento com PIX</h3>
                <p className={stylesModalCarrinho.textoInstrucao}>Aponte a câmera do seu celular para o QR Code ou copie o código abaixo:</p>
                <img 
                    src="https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/solutions/plain-text/qrcode01.png" 
                    alt="[QR Code PIX de Exemplo]" 
                    className={stylesModalCarrinho.imagemQrCode}
                />
                <button 
                    onClick={copiarCodigoPix}
                    className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario} ${stylesModalCarrinho.botaoCopiarPix}`}
                >
                    Copiar Código PIX
                </button>
                <div className={stylesModalCarrinho.botoesNavegacao}>
                    <button onClick={() => definirEtapaCheckout('formaPagamento')} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario}`}>Voltar</button>
                    <button onClick={() => definirEtapaCheckout('confirmacao')} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoPrimario}`}>Já Paguei, Confirmar</button>
                </div>
            </div>
        );
    case 'dinheiro_troco':
        return (
            <div className={stylesModalCarrinho.etapaContainer}>
                <h3 className={stylesModalCarrinho.tituloEtapa}>Pagamento em Dinheiro</h3>
                <p className={stylesModalCarrinho.textoInstrucao}>Valor total do pedido: R$ {calcularTotalGeral().toFixed(2)}</p>
                <label htmlFor="troco" className={stylesModalCarrinho.labelFormulario}>Precisa de troco para quanto?</label>
                <input 
                    type="text" 
                    id="troco" 
                    name="troco" 
                    value={trocoPara}
                    onChange={(e) => {
                        const valor = e.target.value.replace(/[^0-9,.]/g, '').replace(',','.');
                        aoMudarTrocoPara({ target: { name: 'troco', value: valor }});
                    }}
                    placeholder="Ex: 50.00 (ou deixe em branco)" 
                    className={`${stylesModalCarrinho.inputFormulario} ${stylesModalCarrinho.inputTroco}`}
                />
                <div className={stylesModalCarrinho.botoesNavegacao}>
                    <button type="button" onClick={() => definirEtapaCheckout('formaPagamento')} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario}`}>Voltar</button>
                    <button type="button" onClick={() => definirEtapaCheckout('confirmacao')} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoPrimario}`}>Próximo</button>
                </div>
            </div>
        );
      case 'confirmacao':
        return (
          <div className={stylesModalCarrinho.etapaContainer}>
            <h3 className={stylesModalCarrinho.tituloEtapa}>Revise seu Pedido</h3>
            {endereco.nomeCliente && (opcaoEntrega === 'delivery' || opcaoEntrega === 'pickup') && ( 
                 <div className={stylesModalCarrinho.blocoResumo}>
                    <h4 className={stylesModalCarrinho.subtituloResumo}>Cliente:</h4>
                    <p className={stylesModalCarrinho.textoResumo}>{endereco.nomeCliente || 'Não informado (Retirada)'}</p>
                </div>
            )}
            <div className={stylesModalCarrinho.blocoResumo}>
              <h4 className={stylesModalCarrinho.subtituloResumo}>Itens:</h4>
              {itensDoCarrinho.map(item => (
                <p key={item.id} className={stylesModalCarrinho.textoResumoItem}>{item.quantidade}x {item.nome} - R$ {calcularSubtotal(item).toFixed(2)}</p>
              ))}
              <p className={stylesModalCarrinho.textoTotalItens}>Total Itens: R$ {calcularTotalGeral().toFixed(2)}</p>
            </div>
            {opcaoEntrega === 'delivery' && (
              <div className={stylesModalCarrinho.blocoResumo}>
                <h4 className={stylesModalCarrinho.subtituloResumo}>Entrega em:</h4>
                <p className={stylesModalCarrinho.textoResumo}>{endereco.rua}, {endereco.numero} - {endereco.bairro}</p>
                <p className={stylesModalCarrinho.textoResumo}>{endereco.cidade} - CEP: {endereco.cep}</p>
                {endereco.complemento && <p className={stylesModalCarrinho.textoResumo}>Comp: {endereco.complemento}</p>}
              </div>
            )}
            {opcaoEntrega === 'pickup' && (
                <div className={stylesModalCarrinho.blocoResumo}>
                    <h4 className={stylesModalCarrinho.subtituloResumo}>Retirada:</h4>
                    <p className={stylesModalCarrinho.textoResumo}>Pedido para retirar na loja.</p>
                </div>
            )}
            <div className={stylesModalCarrinho.blocoResumo}>
              <h4 className={stylesModalCarrinho.subtituloResumo}>Forma de Pagamento:</h4>
              <p className={stylesModalCarrinho.textoResumo}>{formaPagamento}</p>
              {(formaPagamento.includes('Dinheiro')) && trocoPara && (
                <p className={stylesModalCarrinho.textoResumo}>Troco para: R$ {parseFloat(trocoPara).toFixed(2)}</p>
              )}
              {(formaPagamento.includes('Maquininha')) && (
                <p className={stylesModalCarrinho.textoResumoMenor}>(Pagamento com cartão na maquininha)</p>
              )}
            </div>
             <div className={stylesModalCarrinho.grupoFormulario}>
                <label htmlFor="observacoes" className={stylesModalCarrinho.labelFormulario}>Observações (opcional):</label>
                <textarea 
                    id="observacoes" 
                    name="observacoes" 
                    rows="2"
                    value={endereco.observacoes} 
                    onChange={aoMudarEndereco}
                    placeholder="Ex: Pizza sem cebola, troco em notas menores, etc." 
                    className={stylesModalCarrinho.textareaFormulario}
                ></textarea>
            </div>
            <div className={stylesModalCarrinho.botoesNavegacao}>
                <button onClick={() => definirEtapaCheckout(formaPagamento === 'PIX (QR Code Online)' ? 'pagamento_online_pix_qrcode' : (formaPagamento.includes('Dinheiro') ? 'dinheiro_troco' : 'formaPagamento'))} 
                        className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoSecundario}`}>Voltar</button>
                <button onClick={aoConfirmarPedido} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoConfirmarPedido}`}>Confirmar Pedido</button>
            </div>
          </div>
        );
        case 'pedidoFinalizado':
            return (
                <div className={`${stylesModalCarrinho.etapaContainer} ${stylesModalCarrinho.etapaCentralizada}`}>
                    <svg className={stylesModalCarrinho.iconeSucesso} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className={stylesModalCarrinho.tituloEtapa}>Pedido Realizado com Sucesso!</h3>
                    <p className={stylesModalCarrinho.textoInstrucao}>Obrigado por escolher a Pizzaria do Peixão! Seu pedido já está sendo preparado.</p>
                    <button onClick={aoFechar} className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoPrimario}`}>Fechar</button>
                </div>
            );
      default: 
        return (
          <>
            {itensDoCarrinho.length === 0 ? (
              <p className={stylesModalCarrinho.carrinhoVazio}>Seu carrinho está vazio.</p>
            ) : (
              <div className={stylesModalCarrinho.listaItensCarrinho}>
                {itensDoCarrinho.map(item => (
                  <div key={item.id} className={stylesModalCarrinho.itemCarrinho}>
                    <div className={stylesModalCarrinho.itemInfo}>
                      <img src={item.imagemUrl} alt={item.nome} className={stylesModalCarrinho.itemImagem}
                           onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/64x64/E0E0E0/000000?text=${encodeURIComponent(item.nome[0])}&font=roboto`; }}/>
                      <div>
                        <h3 className={stylesModalCarrinho.itemNome}>{item.nome}</h3>
                        <p className={stylesModalCarrinho.itemPrecoUnitario}>R$ {item.preco.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className={stylesModalCarrinho.itemControles}>
                      <button onClick={() => aoAtualizarQuantidade(item.id, 'decrementar')} className={stylesModalCarrinho.botaoQuantidade}>-</button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => aoAtualizarQuantidade(item.id, 'incrementar')} className={stylesModalCarrinho.botaoQuantidade}>+</button>
                    </div>
                    <div className={stylesModalCarrinho.itemSubtotal}>
                      R$ {calcularSubtotal(item).toFixed(2)}
                    </div>
                    <button onClick={() => aoRemoverItem(item.id)} className={stylesModalCarrinho.botaoRemover}>Remover</button>
                  </div>
                ))}
              </div>
            )}

            {itensDoCarrinho.length > 0 && (
              <div className={stylesModalCarrinho.rodapeCarrinho}>
                <div className={stylesModalCarrinho.totalGeral}>
                  <span>Total:</span>
                  <span>R$ {calcularTotalGeral().toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => definirEtapaCheckout('entregaRetirada')}
                  className={`${stylesModalCarrinho.botao} ${stylesModalCarrinho.botaoFinalizarPedido}`}>
                  Finalizar Pedido
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className={stylesModalCarrinho.fundoModal}>
      <div className={stylesModalCarrinho.conteudoModal}>
        <div className={stylesModalCarrinho.cabecalhoModal}>
          <h2 className={stylesModalCarrinho.tituloModal}>
            {etapaCheckout === 'carrinho' ? 'Seu Carrinho' : 
             etapaCheckout === 'pedidoFinalizado' ? 'Status do Pedido' : 'Finalizar Compra'}
          </h2>
          <button onClick={aoFechar} className={stylesModalCarrinho.botaoFecharModal}>&times;</button>
        </div>
        {renderizarConteudoModal()}
      </div>
    </div>
  );
};


function App() {
  const [carrinhoItens, definirCarrinhoItens] = useState([]);
  const [mostrarCarrinho, definirMostrarCarrinho] = useState(false);
  const [etapaCheckout, definirEtapaCheckout] = useState('carrinho'); 
  const [opcaoEntrega, definirOpcaoEntrega] = useState(''); 
  const [endereco, definirEndereco] = useState({
    nomeCliente: '', rua: '', numero: '', bairro: '', cidade: '', cep: '', complemento: '', observacoes: '' 
  });
  const [formaPagamento, definirFormaPagamento] = useState('');
  const [trocoPara, definirTrocoPara] = useState('');


  const adicionarAoCarrinho = (produtoAdicionado) => {
    definirCarrinhoItens(itensAtuais => {
      const itemExistente = itensAtuais.find(item => item._id === produtoAdicionado._id); 
      if (itemExistente) {
        return itensAtuais.map(item =>
          item._id === produtoAdicionado._id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...itensAtuais, { ...produtoAdicionado, id: produtoAdicionado._id, quantidade: 1 }]; 
    });
  };

  const removerDoCarrinho = (idProduto) => {
    definirCarrinhoItens(itensAtuais => itensAtuais.filter(item => item.id !== idProduto));
  };

  const atualizarQuantidadeNoCarrinho = (idProduto, acao) => {
    definirCarrinhoItens(itensAtuais =>
      itensAtuais.map(item => {
        if (item.id === idProduto) {
          if (acao === 'incrementar') {
            return { ...item, quantidade: item.quantidade + 1 };
          }
          if (acao === 'decrementar') {
            return item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : null; 
          }
        }
        return item;
      }).filter(item => item !== null) 
    );
  };
  
  const alternarVisibilidadeCarrinho = () => {
    definirMostrarCarrinho(!mostrarCarrinho);
    if (mostrarCarrinho && etapaCheckout !== 'pedidoFinalizado') { 
        definirEtapaCheckout('carrinho'); 
        definirTrocoPara(''); 
        definirEndereco(prev => ({ ...prev, observacoes: ''})); 
    }
  };

  const lidarComMudancaEndereco = (e) => {
    const { name, value } = e.target;
    definirEndereco(prevEndereco => ({
      ...prevEndereco,
      [name]: value
    }));
  };

  const lidarComMudancaTroco = (e) => {
    const { value } = e.target; 
    const valorNumerico = value.replace(/[^0-9.,]/g, '').replace(',', '.'); 
    definirTrocoPara(valorNumerico);
  }


  const lidarComConfirmacaoPedido = async () => {
    const dadosPedidoParaAPI = {
      itens: carrinhoItens.map(item => ({
        produtoId: item._id, 
        nomeProduto: item.nome,
        quantidade: item.quantidade,
        precoUnitario: item.preco
      })),
      totalPedido: carrinhoItens.reduce((total, item) => total + (item.preco * item.quantidade), 0),
      opcaoEntrega,
      enderecoEntrega: opcaoEntrega === 'delivery' ? {
          nomeCliente: endereco.nomeCliente,
          rua: endereco.rua,
          numero: endereco.numero,
          bairro: endereco.bairro,
          cidade: endereco.cidade,
          cep: endereco.cep,
          complemento: endereco.complemento
      } : null,
      formaPagamento,
      trocoPara: (formaPagamento.includes('Dinheiro') && trocoPara) ? parseFloat(trocoPara).toFixed(2) : null,
      // observacoes: endereco.observacoes, // Campo removido
      statusPedido: 'Recebido' 
    };

    if (opcaoEntrega === 'pickup' && endereco.nomeCliente) { 
        dadosPedidoParaAPI.clienteNome = endereco.nomeCliente;
    }


    console.log("Enviando para API (simulação):", dadosPedidoParaAPI);
    // try {
    //   const resposta = await axios.post(`${API_URL}/pedidos`, dadosPedidoParaAPI);
    //   console.log('Pedido enviado com sucesso:', resposta.data);
    //   definirEtapaCheckout('pedidoFinalizado');
    // } catch (erro) {
    //   console.error('Erro ao enviar pedido:', erro.response ? erro.response.data : erro.message);
    //   alert(`Houve um erro ao enviar seu pedido: ${erro.response ? erro.response.data.message : erro.message}. Verifique o console para mais detalhes e se o servidor backend está rodando.`);
    // }
    definirEtapaCheckout('pedidoFinalizado');
  };
  
  const fecharModalPosConfirmacao = () => {
    definirMostrarCarrinho(false); 
    definirCarrinhoItens([]); 
    definirEtapaCheckout('carrinho'); 
    definirOpcaoEntrega('');
    definirEndereco({ nomeCliente: '', rua: '', numero: '', bairro: '', cidade: '', cep: '', complemento: '', observacoes: '' });
    definirFormaPagamento('');
    definirTrocoPara('');
  }


  return (
    <div className={stylesApp.appContainer}> 
      <Cabecalho itensNoCarrinho={carrinhoItens} aoAbrirCarrinho={alternarVisibilidadeCarrinho} />
      <main>
        <SecaoDestaque />
        <ListaProdutos aoAdicionarAoCarrinho={adicionarAoCarrinho} />
        <ListaBebidas aoAdicionarAoCarrinho={adicionarAoCarrinho} />
        <SecaoSobre />
        <SecaoContato />
      </main>
      <Rodape />
      <ModalCarrinho 
        mostrar={mostrarCarrinho} 
        aoFechar={etapaCheckout === 'pedidoFinalizado' ? fecharModalPosConfirmacao : alternarVisibilidadeCarrinho}
        itensDoCarrinho={carrinhoItens}
        aoAtualizarQuantidade={atualizarQuantidadeNoCarrinho}
        aoRemoverItem={removerDoCarrinho}
        etapaCheckout={etapaCheckout}
        definirEtapaCheckout={definirEtapaCheckout}
        opcaoEntrega={opcaoEntrega}
        definirOpcaoEntrega={definirOpcaoEntrega}
        endereco={endereco}
        aoMudarEndereco={lidarComMudancaEndereco}
        formaPagamento={formaPagamento}
        definirFormaPagamento={definirFormaPagamento}
        aoConfirmarPedido={lidarComConfirmacaoPedido}
        trocoPara={trocoPara}
        aoMudarTrocoPara={lidarComMudancaTroco}
      />
    </div>
  );
}

export default App;
