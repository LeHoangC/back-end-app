/*
  Warnings:

  - Added the required column `img` to the `transaction_lines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `transaction_lines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nguoithuchien` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction_lines` ADD COLUMN `img` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `nguoithuchien` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exist` INTEGER NOT NULL,
    `usersId` INTEGER NULL,
    `productsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
