document.querySelectorAll('.price-plan').forEach(plan => {
    plan.addEventListener('click', () => {
        // Remove a classe 'active' de todos os planos
        document.querySelectorAll('.price-plan').forEach(otherPlan => {
            otherPlan.style.transform = 'scale(0.8)';
        });
        // Adiciona a classe 'active' ao plano clicado
        plan.style.transform = 'scale(1.1)';
    });
});