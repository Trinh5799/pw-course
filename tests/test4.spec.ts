import { test, expect } from '@playwright/test';
let notes = [
    { title: "Những cỗ máy thử giày khiến con người nhiễm bức xạ", content: "Những năm 1920 - 1950, nhiều hiệu giày tại châu Mỹ và châu Âu trang bị máy chụp X-quang trực tiếp, giúp khách hàng chọn những đôi giày vừa vặn." },
    { title: "Giàn turbine gió kép mạnh nhất thế giới ra khơi", content:"Thiết kế hình chữ V của turbine kép OceanX cung cấp 16,6 MW, sản xuất 54.000 MWh điện hàng năm, đủ để cung cấp cho 30.000 hộ gia đình Trung Quốc."},
    { title: "Những cỗ máy thử giày khiến con người nhiễm bức xạ", content:"Những năm 1920 - 1950, nhiều hiệu giày tại châu Mỹ và châu Âu trang bị máy chụp X-quang trực tiếp, giúp khách hàng chọn những đôi giày vừa vặn."},
    { title: "16 đội thi bước vào Chung kết AI Awards 2024", content:"16 giải pháp, sản phẩm được đánh giá bởi Hội đồng giám khảo và lượng bình chọn cao bước vào vòng thuyết trình tại AI Awards 2024 sáng nay 16/8."},
    { title: "Cá voi lưng gù sống lâu nhất thế giới", content:"Old Timer, con cá voi lưng gù đực chụp ảnh lần đầu tiên năm 1972, được phát hiện tháng trước ở Alaska."},
    { title: "Trung Quốc dùng điện mặt trời để chống sa mạc hóa", content:"Nhà chức trách Trung Quốc đang tận dụng các trang trại điện mặt trời để kết hợp trồng cây và chăn nuôi gia súc, góp phần ngăn chặn bão cát và sa mạc xâm lấn."},
    { title: "Phát hiện 5 loài nấm mới tại Việt Nam", content:"Các nhà nghiên cứu phát hiện và công bố 5 loài nấm mới cho khoa học thuộc họ nấm thông Boletaceae và Entolomataceae tại Vườn Quốc gia và Khu bảo tồn Thiên nhiên của Việt Nam."},
    { title: "Phát hiện 25 tấn nước phóng xạ rò rỉ ở Fukushima", content:"Robot thăm dò phát hiện nước phóng xạ rò rỉ thông qua hệ thống cống của nhà máy điện hạt nhân Fukushima nhưng không ngấm ra môi trường bên ngoài"},
    { title: "Tiểu hành tinh kim loại 10 tỷ tỷ USD đang han gỉ", content:"Phân tích của kính viễn vọng không gian James Webb hé lộ dấu hiệu của nước dưới dạng gỉ sét trên tiểu hành tinh khổng lồ giàu kim loại Psyche."},
    { title: "Tháng 7 nóng kỷ lục với hàng loạt thảm họa", content:"Trong tháng 7, nhiệt độ trung bình của Trái Đất đạt mức cao nhất lịch sử, nhiều thảm họa như bão, cháy rừng, lũ lụt, cũng xảy ra."},
]
test('Them san pham', async ({ page }) => {
    // Truy cập trang web
    await page.goto('https://material.playwrightvn.com/');
    // Đến trang product page
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    // Thêm báo
    for (let note of notes) {
        await page.locator('//input[@id="note-title"]').fill(note.title);
        await page.locator('//textarea[@id="note-content"]').fill(note.content);
        await page.locator('//button[@id="add-note"]').click();
    }
    // Search tieu de
    await page.locator("//input[@id='search']").fill("Những cỗ máy");
})
