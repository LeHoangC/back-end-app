/*
  Warnings:

  - You are about to drop the column `GioRa` on the `chamcong` table. All the data in the column will be lost.
  - You are about to drop the column `GioVao` on the `chamcong` table. All the data in the column will be lost.
  - Added the required column `chieu_GioRa` to the `ChamCong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chieu_GioVao` to the `ChamCong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sang_GioRa` to the `ChamCong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sang_GioVao` to the `ChamCong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tieu_chuan` to the `inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chamcong` DROP COLUMN `GioRa`,
    DROP COLUMN `GioVao`,
    ADD COLUMN `chieu_GioRa` VARCHAR(191) NOT NULL,
    ADD COLUMN `chieu_GioVao` VARCHAR(191) NOT NULL,
    ADD COLUMN `sang_GioRa` VARCHAR(191) NOT NULL,
    ADD COLUMN `sang_GioVao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inventory` ADD COLUMN `tieu_chuan` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `ChiSoCaNhan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `luong_tam_tinh` DOUBLE NOT NULL,
    `ngay_cong` DOUBLE NOT NULL,
    `chiet_khau_thay_loi` DOUBLE NOT NULL,
    `chiet_khau_don_them` DOUBLE NOT NULL,
    `so_don_phat_sinh` DOUBLE NOT NULL,
    `gia_tri_TB_hien_tai` DOUBLE NOT NULL,
    `gia_tri_TB_yeu_cau` DOUBLE NOT NULL,
    `gia_tri_TB_con_thieu` DOUBLE NOT NULL,
    `tong_so_tien_Con_thieu` DOUBLE NOT NULL,
    `so_don_ve_sinh` DOUBLE NOT NULL,
    `ti_le_ve_sinh_TT` DOUBLE NOT NULL,
    `OLE` DOUBLE NOT NULL,
    `so_KM_TB_don` DOUBLE NOT NULL,
    `time_TB` DOUBLE NOT NULL,
    `usersId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChiSoCaNhan` ADD CONSTRAINT `ChiSoCaNhan_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
