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

-- AddForeignKey
ALTER TABLE `ChamCong` ADD CONSTRAINT `ChamCong_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
