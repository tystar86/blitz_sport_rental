# Migration `20210104094503-fix_models_relations`

This migration has been generated by tystar at 1/4/2021, 10:45:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210104093441-create_relations_between_models..20210104094503-fix_models_relations
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
@@ -92,6 +92,7 @@
   id            Int      @default(autoincrement()) @id
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
   url           String
-  item          Item     @relation(references: [id])
+  items         Item     @relation(fields: [itemId], references: [id])
+  itemId        Int
 }
```


