# Migration `20201228151955-optional_category`

This migration has been generated by tystar at 12/28/2020, 4:19:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Item" ALTER COLUMN "categoryId" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201228145117-add_models..20201228151955-optional_category
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
@@ -54,9 +54,9 @@
   quantity      Int
   invoices      String?
   purchasePrice Float?
   sellingPrice  Float?
-  category      Category
+  category      Category?
 }
 model Customer {
   id        Int      @default(autoincrement()) @id
```

