// Função para copiar e-mail
document.getElementById('copyEmailBtn').addEventListener('click', function() {
    // Substitua pelo e-mail real do Fábio
    const email = 'fabio1203.fabio@gmail.com';
    
    // Copia para a área de transferência
    navigator.clipboard.writeText(email).then(function() {
        // Feedback visual temporário
        const btn = document.getElementById('copyEmailBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>E-mail Copiado!</span>';
        btn.classList.add('bg-green-600');
        
        // Restaura o botão após 2 segundos
        setTimeout(function() {
            btn.innerHTML = originalText;
            btn.classList.remove('bg-green-600');
        }, 2000);
    }).catch(function(err) {
        console.error('Erro ao copiar e-mail:', err);
        alert('Erro ao copiar e-mail. Por favor, copie manualmente.');
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Inicializa as animações de surgimento (AOS)
AOS.init({
    duration: 1000, // Tempo da animação (1 segundo)
    once: true,     // Anima apenas uma vez quando o usuário desce
});
