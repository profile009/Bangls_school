// স্বরবর্ণ পেজের জন্য বিশেষ স্ক্রিপ্ট
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.sworoborno-item');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            const audioPath = this.getAttribute('data-audio');
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.log("অডিও প্লে করতে সমস্যা: ", e));
            
            // অ্যানিমেশন যোগ করতে পারেন
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});