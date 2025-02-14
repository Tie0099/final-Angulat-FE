# ระบบลางาน (Leave System)

ระบบลางานที่พัฒนาด้วย **Angular 18** สำหรับ Frontend และ **Spring Boot 3.3** สำหรับ Backend โดยใช้ **PostgreSQL** เป็นฐานข้อมูล

## เทคโนโลยีที่ใช้

### Frontend
- **Angular 18**: ใช้สำหรับพัฒนา UI และทำงานร่วมกับ API
- **Angular Material**: ใช้สำหรับ UI Components
- **NgRx**: ใช้สำหรับการจัดการสถานะของแอปพลิเคชัน
- **RxJS**: ใช้ในการจัดการกระบวนการแบบอะซิงโครนัส (Asynchronous)

### Backend
- **Spring Boot 3.3**: ใช้สำหรับการพัฒนา API
- **Spring Data JPA**: ใช้สำหรับเชื่อมต่อกับฐานข้อมูล PostgreSQL
- **Java 17**: ภาษาในการพัฒนา Backend

### Database
- **PostgreSQL**: ใช้ในการเก็บข้อมูล

## การติดตั้งและการตั้งค่า

### 1. ติดตั้ง Dependencies
ก่อนที่คุณจะเริ่มใช้งานระบบนี้ คุณต้องติดตั้งเครื่องมือต่างๆ ที่โปรเจกต์นี้ใช้งานก่อน

#### ติดตั้ง **Node.js** และ **npm**
โปรเจกต์นี้ใช้ **Node.js** และ **npm** (Node Package Manager) เพื่อจัดการ dependencies ของ Angular

1. ไปที่ [Node.js](https://nodejs.org/) และติดตั้ง Node.js เวอร์ชันล่าสุด
2. ตรวจสอบการติดตั้งด้วยคำสั่ง:
   ```bash
   node -v
   npm -v
