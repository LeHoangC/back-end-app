-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `properties` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `authorId` INTEGER NOT NULL,
    `customer_name` VARCHAR(191) NOT NULL,
    `TenHang` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `thongTinThanhToanId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThongTinThanhToan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `NguoiLam` VARCHAR(191) NOT NULL,
    `KhachHang` VARCHAR(191) NOT NULL,
    `Phone_Number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `authorId` INTEGER NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `TongTienChuaGiamGia` DOUBLE NOT NULL,
    `Thue` DOUBLE NOT NULL,
    `GiamGiaCombo` DOUBLE NOT NULL,
    `TongTienSauGiam` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_name` VARCHAR(191) NOT NULL,
    `Phone_Number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Note` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KhachHangDaMua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `Number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Author_email` VARCHAR(191) NOT NULL,
    `Note` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChamCong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MaQR` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `GioVao` VARCHAR(191) NOT NULL,
    `GioRa` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NULL,
    `img` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KhoHangCaNhan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TenHang` VARCHAR(191) NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MuonHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TenHang` VARCHAR(191) NOT NULL,
    `produce` INTEGER NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `NguoiMuon` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NULL,
    `lichSuMuonHangId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MuonHangNhap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TenHang` VARCHAR(191) NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `NguoiMuon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LichSuMuonHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TrangThai` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `NguoiMuon` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_thongTinThanhToanId_fkey` FOREIGN KEY (`thongTinThanhToanId`) REFERENCES `ThongTinThanhToan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChamCong` ADD CONSTRAINT `ChamCong_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KhoHangCaNhan` ADD CONSTRAINT `KhoHangCaNhan_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_lichSuMuonHangId_fkey` FOREIGN KEY (`lichSuMuonHangId`) REFERENCES `LichSuMuonHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
