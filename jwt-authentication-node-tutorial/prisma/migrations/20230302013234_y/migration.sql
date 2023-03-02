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

-- CreateTable
CREATE TABLE `KhoHangTong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TenHang` VARCHAR(191) NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `properties` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `XuatHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TenHang` VARCHAR(191) NOT NULL,
    `SoLuong` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lichSuXuatHangId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LichSuXuatHang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `TrangThai` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_lichSuMuonHangId_fkey` FOREIGN KEY (`lichSuMuonHangId`) REFERENCES `LichSuMuonHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `XuatHang` ADD CONSTRAINT `XuatHang_lichSuXuatHangId_fkey` FOREIGN KEY (`lichSuXuatHangId`) REFERENCES `LichSuXuatHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
