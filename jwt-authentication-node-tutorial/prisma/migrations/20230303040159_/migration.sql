-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NOT NULL,
    `transactions_id` INTEGER NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_code` VARCHAR(191) NOT NULL,
    `customer_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Note` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `transactions_id` INTEGER NULL,
    `customer_nhapId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction_lines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `oderhistory_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `number_of` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `total_sale` DOUBLE NOT NULL,
    `transaction_id` INTEGER NULL,
    `products_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction_payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `oderhistory_id` INTEGER NOT NULL,
    `payment_methods` VARCHAR(191) NOT NULL,
    `account_name` VARCHAR(191) NOT NULL,
    `bank_name` VARCHAR(191) NOT NULL,
    `total_sale` DOUBLE NOT NULL,
    `account_number` VARCHAR(191) NOT NULL,
    `transaction_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_bill` VARCHAR(191) NOT NULL,
    `nguoithuchien` VARCHAR(191) NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total_amount_without_discount` DOUBLE NOT NULL,
    `combo_discount` DOUBLE NOT NULL,
    `VAT` DOUBLE NOT NULL,
    `discount` DOUBLE NOT NULL,
    `total_amount_after_discount` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `Number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Author_email` VARCHAR(191) NOT NULL,
    `Note` VARCHAR(191) NOT NULL,
    `transactionsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_nhap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `Number` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Author_email` VARCHAR(191) NOT NULL,
    `Note` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TokenThongBao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exist` INTEGER NOT NULL,
    `usersId` INTEGER NULL,
    `productsId` INTEGER NULL,

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
CREATE TABLE `DonXin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `LiDoNghi` VARCHAR(191) NOT NULL,
    `CongViecBanGiao` VARCHAR(191) NOT NULL,
    `CamKet` VARCHAR(191) NOT NULL,
    `Date` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NOT NULL DEFAULT '',
    `soNgayNghi` INTEGER NOT NULL DEFAULT 0,
    `status` VARCHAR(191) NOT NULL,
    `banGiaoCho` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DangKiLichParttime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NgayDangKy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dangky_id` INTEGER NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `sang` BOOLEAN NOT NULL DEFAULT true,
    `chieu` BOOLEAN NOT NULL DEFAULT false,
    `toi` BOOLEAN NOT NULL DEFAULT false,

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
ALTER TABLE `users` ADD CONSTRAINT `users_transactions_id_fkey` FOREIGN KEY (`transactions_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_transactions_id_fkey` FOREIGN KEY (`transactions_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_customer_nhapId_fkey` FOREIGN KEY (`customer_nhapId`) REFERENCES `customer_nhap`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_lines` ADD CONSTRAINT `transaction_lines_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_lines` ADD CONSTRAINT `transaction_lines_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_payment` ADD CONSTRAINT `transaction_payment_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_history` ADD CONSTRAINT `customer_history_transactionsId_fkey` FOREIGN KEY (`transactionsId`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChamCong` ADD CONSTRAINT `ChamCong_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DangKiLichParttime` ADD CONSTRAINT `DangKiLichParttime_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NgayDangKy` ADD CONSTRAINT `NgayDangKy_dangky_id_fkey` FOREIGN KEY (`dangky_id`) REFERENCES `DangKiLichParttime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuonHang` ADD CONSTRAINT `MuonHang_lichSuMuonHangId_fkey` FOREIGN KEY (`lichSuMuonHangId`) REFERENCES `LichSuMuonHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `XuatHang` ADD CONSTRAINT `XuatHang_lichSuXuatHangId_fkey` FOREIGN KEY (`lichSuXuatHangId`) REFERENCES `LichSuXuatHang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
