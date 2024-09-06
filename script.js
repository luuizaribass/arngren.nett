document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelector('.imgCarrossel'); // Corrigido seletor para .imgCarrossel
    const dots = document.querySelectorAll('.ponto'); // Corrigido seletor para .ponto
    let index = 0;
    const totalImages = dots.length;

    function showSlide(n) {
        index = (n + totalImages) % totalImages;
        images.style.transform = `translateX(${-index * 100}%)`; // Transição suave
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index); // Define o ponto ativo
        });
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos

    // Escutadores de eventos para trocar slides manualmente
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    // Traduções para cada idioma
    const traducoes = {
        pt: {
            categorias: 'Principais Categorias',
            lancamentos: 'Lançamentos',
            revenda: 'Revenda Seus Itens',
            saibaMais: 'Saiba Mais',
            preco1: 'R$ 199,90',
            preco2: 'R$ 299,90',
            preco3: 'R$ 399,90',
            preco4: 'R$ 499,90',
            freteGratis: 'Frete grátis para todo o Brasil',
            parceleCompra: 'Parcele sua compra em até 2x',
            compraSegura: 'Compra segura, seus dados protegidos',
            pedidoMonitorado: 'Pedido monitorado com código de rastreamento',
            atendimento: 'Atendimento',
            horarioFuncionamento: 'Horário de funcionamento: Segunda a sexta: 8:00 às 23:00h',
            telefoneFixo: '📞 (+47) -22149166',
            telefoneCelular: '📱 (+47) -92060873',
            institucional: 'Institucional',
            ajuda: 'Ajuda',
            meusPedidos: 'Meus Pedidos',
            revendaDescricao: 'Contate-nos e revenda seus produtos eletrônicos também. Preencha o formulário a seguir:',
            enviar: 'Enviar',
            // Itens do Menu
            home: 'Home',
            quemSomos: 'Quem somos',
            revendaMenu: 'Revenda',
            produtos: 'Produtos',
            devolucao: 'Políticas de devolução e trocas',
            privacidade: 'Políticas de privacidade',
            faleConosco: 'Fale Conosco',
            entregas: 'Entregas e prazos',
            acompanhePedidos: 'Acompanhe seus pedidos',
            editarCadastro: 'Editar cadastro'
        },
        en: {
            categorias: 'Main Categories',
            lancamentos: 'New Arrivals',
            revenda: 'Resell Your Items',
            saibaMais: 'Learn More',
            preco1: '$ 199.90',
            preco2: '$ 299.90',
            preco3: '$ 399.90',
            preco4: '$ 499.90',
            freteGratis: 'Free shipping across Brazil',
            parceleCompra: 'Pay in up to 2 installments',
            compraSegura: 'Secure purchase, your data is protected',
            pedidoMonitorado: 'Order tracking with tracking code',
            atendimento: 'Customer Service',
            horarioFuncionamento: 'Opening hours: Monday to Friday: 8:00 am to 11:00 pm',
            telefoneFixo: '📞 (+47) -22149166',
            telefoneCelular: '📱 (+47) -92060873',
            institucional: 'Institutional',
            ajuda: 'Help',
            meusPedidos: 'My Orders',
            revendaDescricao: 'Contact us to resell your electronic products. Fill out the form below:',
            enviar: 'Submit',
            home: 'Home',
            quemSomos: 'About Us',
            revendaMenu: 'Resell',
            produtos: 'Products',
            devolucao: 'Return and Exchange Policy',
            privacidade: 'Privacy Policy',
            faleConosco: 'Contact Us',
            entregas: 'Shipping and Deadlines',
            acompanhePedidos: 'Track Your Orders',
            editarCadastro: 'Edit Registration'
        },
        es: {
            categorias: 'Principales Categorías',
            lancamentos: 'Lanzamientos',
            revenda: 'Revende tus artículos',
            saibaMais: 'Saber Más',
            preco1: '$ 199.90',
            preco2: '$ 299.90',
            preco3: '$ 399.90',
            preco4: '$ 499.90',
            freteGratis: 'Envío gratis para todo Brasil',
            parceleCompra: 'Paga en hasta 2 cuotas',
            compraSegura: 'Compra segura, tus datos están protegidos',
            pedidoMonitorado: 'Pedido rastreado con código de seguimiento',
            atendimento: 'Atención al Cliente',
            horarioFuncionamento: 'Horario: Lunes a viernes: 8:00 a 23:00h',
            telefoneFixo: '📞 (+47) -22149166',
            telefoneCelular: '📱 (+47) -92060873',
            institucional: 'Institucional',
            ajuda: 'Ayuda',
            meusPedidos: 'Mis Pedidos',
            revendaDescricao: 'Contáctanos y revende tus productos electrónicos. Complete el siguiente formulario:',
            enviar: 'Enviar',
            home: 'Inicio',
            quemSomos: 'Quiénes Somos',
            revendaMenu: 'Revender',
            produtos: 'Productos',
            devolucao: 'Política de devoluciones y cambios',
            privacidade: 'Política de privacidad',
            faleConosco: 'Contáctenos',
            entregas: 'Entregas y plazos',
            acompanhePedidos: 'Sigue tus pedidos',
            editarCadastro: 'Editar registro'
        },
        no: {
            categorias: 'Hovedkategorier',
            lancamentos: 'Nyheter',
            revenda: 'Selg dine varer',
            saibaMais: 'Les mer',
            preco1: 'kr 199,90',
            preco2: 'kr 299,90',
            preco3: 'kr 399,90',
            preco4: 'kr 499,90',
            freteGratis: 'Gratis frakt i hele Brasil',
            parceleCompra: 'Betal i opptil 2 avdrag',
            compraSegura: 'Sikker handel, dine data er beskyttet',
            pedidoMonitorado: 'Ordresporing med sporingskode',
            atendimento: 'Kundeservice',
            horarioFuncionamento: 'Åpningstider: Mandag til fredag: 08.00 til 23.00',
            telefoneFixo: '📞 (+47) -22149166',
            telefoneCelular: '📱 (+47) -92060873',
            institucional: 'Institusjonell',
            ajuda: 'Hjelp',
            meusPedidos: 'Mine Ordre',
            revendaDescricao: 'Kontakt oss for å selge dine elektroniske produkter. Fyll ut skjemaet nedenfor:',
            enviar: 'Send inn',
            home: 'Hjem',
            quemSomos: 'Om Oss',
            revendaMenu: 'Selge',
            produtos: 'Produkter',
            devolucao: 'Retur- og byttepolicy',
            privacidade: 'Personvernerklæring',
            faleConosco: 'Kontakt Oss',
            entregas: 'Levering og Frister',
            acompanhePedidos: 'Spor Ordre',
            editarCadastro: 'Rediger Registrering'
        }
    };

    // Função para trocar todo o texto da página
    function trocarIdioma(idioma) {
        document.querySelector('h1#titulo').textContent = traducoes[idioma].categorias;
        document.querySelector('h2#titulo').textContent = traducoes[idioma].lancamentos;
        document.querySelector('.formRevenda h2').textContent = traducoes[idioma].revenda;
        document.querySelectorAll('.caixaLancamento button').forEach(button => button.textContent = traducoes[idioma].saibaMais);
        document.querySelector('.formRevenda p').textContent = traducoes[idioma].revendaDescricao;
        document.querySelector('.formRevenda button').textContent = traducoes[idioma].enviar;

        // Preços
        document.querySelectorAll('.caixaLancamento p')[0].textContent = traducoes[idioma].preco1;
        document.querySelectorAll('.caixaLancamento p')[1].textContent = traducoes[idioma].preco2;
        document.querySelectorAll('.caixaLancamento p')[2].textContent = traducoes[idioma].preco3;
        document.querySelectorAll('.caixaLancamento p')[3].textContent = traducoes[idioma].preco4;

        // Informações de entrega e segurança
        document.querySelector('.infoBox:nth-child(1) p').textContent = traducoes[idioma].freteGratis;
        document.querySelector('.infoBox:nth-child(2) p').textContent = traducoes[idioma].parceleCompra;
        document.querySelector('.infoBox:nth-child(3) p').textContent = traducoes[idioma].compraSegura;
        document.querySelector('.infoBox:nth-child(4) p').textContent = traducoes[idioma].pedidoMonitorado;

        // Informações de atendimento
        document.querySelector('.footerAttendimento p').textContent = traducoes[idioma].atendimento;
        document.querySelector('.footerAttendimento span').textContent = traducoes[idioma].horarioFuncionamento;
        document.querySelectorAll('.footerAttendimento a')[0].textContent = traducoes[idioma].telefoneFixo;
        document.querySelectorAll('.footerAttendimento a')[1].textContent = traducoes[idioma].telefoneCelular;

        // Menu do rodapé
        document.querySelector('.footerInstitucional h3').textContent = traducoes[idioma].institucional;
        document.querySelector('.footerAjuda h3').textContent = traducoes[idioma].ajuda;
        document.querySelectorAll('.footerAjuda ul li a')[0].textContent = traducoes[idioma].meusPedidos;
    }

    const selectIdioma = document.getElementById('trocaIdioma');
    selectIdioma.addEventListener('change', (e) => {
        const idioma = e.target.value;
        trocarIdioma(idioma);
    });

    // Iniciar página com idioma padrão (português)
    trocarIdioma('pt');
});
