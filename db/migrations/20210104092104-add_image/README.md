# Migration `20210104092104-add_image`

This migration has been generated by tystar at 1/4/2021, 10:21:04 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Image" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "itemId" INTEGER,

    PRIMARY KEY ("id")
)

ALTER TABLE "Image" ADD FOREIGN KEY("itemId")REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201228151955-optional_category..20210104092104-add_image
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -55,14 +55,15 @@
   invoices      String?
   purchasePrice Float?
   sellingPrice  Float?
   category      Category?
+  images        Image[]
 }
 model Customer {
-  id        Int      @default(autoincrement()) @id
-  createdAt DateTime @default(now())
-  updatedAt DateTime @updatedAt
+  id             Int      @default(autoincrement()) @id
+  createdAt      DateTime @default(now())
+  updatedAt      DateTime @updatedAt
   firstName      String
   lastName       String
   personalID     String    @unique
   phoneNumber    Int
@@ -77,11 +78,18 @@
   name      String   @unique
 }
 model Sell {
-  id        Int      @default(autoincrement()) @id
-  createdAt DateTime @default(now())
-  updatedAt DateTime @updatedAt
+  id            Int      @default(autoincrement()) @id
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
   returnedAt    DateTime?
   items         Item[]
   customer      Customer?
 }
+
+model Image {
+  id            Int      @default(autoincrement()) @id
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+  url           String
+}
```

