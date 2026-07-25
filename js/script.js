// زر الطلب يوديك للمنتجات
document.getElementById('orderBtn').addEventListener('click', function() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// تنبيه عند إضافة للسلة
const buyButtons = document.querySelectorAll('.buyBtn');
buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('تمت إضافة المنتج للسلة بنجاح 💜 \nسيتواصل معك فريق أم فؤاد');
  });
});

// إرسال الفورم
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('شكراً لتواصلك معنا! سيرد عليك فريق أم فؤاد قريباً');
  this.reset();
});
