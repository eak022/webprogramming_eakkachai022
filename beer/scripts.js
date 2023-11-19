// เลือกปุ่ม "จองคิว"
const bookNowBtn = document.getElementById('book-now-btn');
// เลือกส่วนของฟอร์มการจองคิว
const bookingForm = document.querySelector('.booking-form');
// เลือกส่วนของเนื้อหาหน้าแรก
const homeContent = document.querySelector('.home-content');

// เมื่อคลิกที่ปุ่ม "จองคิว"
bookNowBtn.addEventListener('click', function(event) {
  // แสดงฟอร์มการจองคิว
  bookingForm.classList.remove('hidden');
  // ซ่อนส่วนของเนื้อหาหน้าแรก
  homeContent.style.display = 'none';
  // ป้องกันการโหลดหน้าใหม่
  event.preventDefault();
});

// เมื่อฟอร์มการจองคิวถูกส่ง
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  // ป้องกันการโหลดหน้าใหม่
  event.preventDefault();
  // ในที่นี้คุณสามารถทำต่อได้ เช่น ส่งข้อมูลการจองคิวไปยังเซิร์ฟเวอร์ หรือ การประมวลผลข้อมูลเพิ่มเติม
  // เมื่อทำเสร็จสามารถนำผู้ใช้ไปยังหน้าขอบคุณหรือหน้าอื่นต่อได้
  alert('ขอบคุณสำหรับการจองคิว!');
});
