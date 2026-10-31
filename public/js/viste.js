document.addEventListener("DOMContentLoaded", () => {

    async function updateVisitCount() {
        try {
            const response = await fetch("/api/visits");

            if (!response.ok) {
                throw new Error("خطا در دریافت تعداد بازدید");
            }

            const count = await response.json();

            const visitElement = document.getElementById("visitCount");

            if (visitElement) {
                visitElement.textContent =`بازدید سایت: ${count}`;
            }

        } catch (error) {
            console.error(error);
        }
    }

    // دریافت اولیه
    updateVisitCount();

    // به‌روزرسانی هر ۳ ثانیه
    setInterval(updateVisitCount, 3000);

});