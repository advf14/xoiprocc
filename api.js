/* --- FILE: api.js --- */
// ID và KEY lấy từ ảnh và chat của bạn
const BIN_ID = '693ac9d5ae596e708f92ada4'; 
const API_KEY = '$2a$10$1HTp4JM67TNbdy5sHkRA7eZybszLmx2.CIDoJYyPraFYHzdOusA5G'; 

const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Hàm tải dữ liệu từ Server về
async function getGlobalData() {
    try {
        let res = await fetch(API_URL + '/latest', {
            headers: { 
                'X-Master-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) throw new Error("Lỗi kết nối Server");
        let json = await res.json();
        return json.record;
    } catch (e) { 
        console.error("Lỗi tải data:", e); 
        return null; 
    }
}

// Hàm lưu dữ liệu lên Server
async function saveGlobalData(data) {
    try {
        await fetch(API_URL, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY 
            },
            body: JSON.stringify(data)
        });
    } catch (e) { console.error("Lỗi lưu data:", e); }
}