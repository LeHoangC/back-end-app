/*
  Warnings:

  - Added the required column `SoLuong` to the `LichSuXuatHang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lichsuxuathang` ADD COLUMN `SoLuong` INTEGER NOT NULL;
