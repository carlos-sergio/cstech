function copyCode() {
    const codeElement = document.querySelector('.code-container code');
    const code = codeElement.textContent;
    
    // Criar um elemento temporário para copiar o texto
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = code;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);
    
    // Selecionar e copiar o texto
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    try {
        document.execCommand('copy');
        
        // Feedback visual
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Copiado!';
        button.style.background = '#27c93f';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#667eea';
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar:', err);
        alert('Não foi possível copiar o código. Por favor, copie manualmente.');
    }
    
    // Remover o elemento temporário
    document.body.removeChild(tempTextArea);
}

// Adicionar animações de scroll
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });
});
