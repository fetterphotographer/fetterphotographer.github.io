// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
    this.reset();
});
