-- CreateTable
CREATE TABLE "item" (
    "item" VARCHAR NOT NULL,
    "item_type" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "start_retail" DECIMAL NOT NULL DEFAULT 0,
    "uom" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "created_by" VARCHAR NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_by" VARCHAR NOT NULL,
    "selling_currency" VARCHAR(3) NOT NULL DEFAULT 'RUB',

    CONSTRAINT "item_pkey" PRIMARY KEY ("item")
);

-- CreateTable
CREATE TABLE "item_store" (
    "item_id" VARCHAR NOT NULL,
    "store_id" INTEGER NOT NULL,
    "retail_price" REAL NOT NULL,
    "qty" DECIMAL DEFAULT 0,
    "created_by" VARCHAR,
    "created_at" TIMESTAMPTZ(6),
    "updated_by" VARCHAR,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "item_store_pkey" PRIMARY KEY ("item_id","store_id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "wh_id" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,
    "order_date" DATE NOT NULL,
    "receive_date" DATE,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "order_id" INTEGER NOT NULL,
    "pack" VARCHAR NOT NULL,
    "qty" DECIMAL NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pack" (
    "pack" VARCHAR NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "pack_qty" INTEGER NOT NULL,
    "item_id" VARCHAR NOT NULL,
    "description" VARCHAR,
    "cost" DECIMAL,

    CONSTRAINT "pack_pkey" PRIMARY KEY ("pack")
);

-- CreateTable
CREATE TABLE "pack_wh" (
    "pack" VARCHAR NOT NULL,
    "wh" INTEGER NOT NULL,
    "qty" DECIMAL DEFAULT 0,

    CONSTRAINT "pack_wh_pkey" PRIMARY KEY ("pack","wh")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" SERIAL NOT NULL,
    "item" VARCHAR NOT NULL,
    "store" INTEGER NOT NULL,
    "discount_type" TEXT NOT NULL,
    "discount_amount" DECIMAL NOT NULL,
    "start_date" TIMESTAMPTZ(6) NOT NULL,
    "end_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "item_id" VARCHAR NOT NULL,
    "store_id" INTEGER NOT NULL,
    "qty" DECIMAL NOT NULL,
    "sale_price" DECIMAL NOT NULL,
    "sale_date" TIMETZ(6) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipment" (
    "id" SERIAL NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,
    "out_date" DATE NOT NULL,
    "in_date" DATE,

    CONSTRAINT "shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipment_details" (
    "shipment_id" INTEGER NOT NULL,
    "pack" VARCHAR NOT NULL,
    "qty" DECIMAL NOT NULL,

    CONSTRAINT "shipment_details_pkey" PRIMARY KEY ("shipment_id","pack")
);

-- CreateTable
CREATE TABLE "store" (
    "store" INTEGER NOT NULL,
    "store_name" TEXT NOT NULL,
    "store_manager" TEXT,
    "phone_number" TEXT NOT NULL,
    "store_type" TEXT NOT NULL,
    "default_wh" INTEGER NOT NULL,
    "open_date" TIMESTAMPTZ(6) NOT NULL,
    "close_date" TIMESTAMPTZ(6),

    CONSTRAINT "store_pk" PRIMARY KEY ("store")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "address" VARCHAR,
    "phone_number" VARCHAR,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "roleId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("roleId","userId")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wh" (
    "id" SERIAL NOT NULL,
    "wh_name" TEXT NOT NULL,
    "wh_manager" TEXT,
    "wh_address" TEXT,

    CONSTRAINT "wh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temp" (
    "item" VARCHAR,
    "item_type" VARCHAR,
    "description" VARCHAR,
    "start_retail" DECIMAL,
    "uom" VARCHAR,
    "created_at" TIMESTAMPTZ(6),
    "created_by" VARCHAR,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by" VARCHAR,
    "selling_currency" VARCHAR(3)
);

-- AddForeignKey
ALTER TABLE "item_store" ADD CONSTRAINT "item_fk" FOREIGN KEY ("item_id") REFERENCES "item"("item") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item_store" ADD CONSTRAINT "store_fk" FOREIGN KEY ("store_id") REFERENCES "store"("store") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "supplier_exists" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "wh_exists" FOREIGN KEY ("wh_id") REFERENCES "wh"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_exists" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "pack_exists" FOREIGN KEY ("pack") REFERENCES "pack"("pack") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pack" ADD CONSTRAINT "item_exists" FOREIGN KEY ("item_id") REFERENCES "item"("item") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pack" ADD CONSTRAINT "supplier_exists" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pack_wh" ADD CONSTRAINT "pack_exists" FOREIGN KEY ("pack") REFERENCES "pack"("pack") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pack_wh" ADD CONSTRAINT "wh_exists" FOREIGN KEY ("wh") REFERENCES "wh"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "promotion" ADD CONSTRAINT "item_fk" FOREIGN KEY ("item") REFERENCES "item"("item") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promotion" ADD CONSTRAINT "item_store_exists" FOREIGN KEY ("item", "store") REFERENCES "item_store"("item_id", "store_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "promotion" ADD CONSTRAINT "store_fk" FOREIGN KEY ("store") REFERENCES "store"("store") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipment" ADD CONSTRAINT "store_exists" FOREIGN KEY ("to") REFERENCES "store"("store") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipment" ADD CONSTRAINT "wh_exists" FOREIGN KEY ("from") REFERENCES "wh"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipment_details" ADD CONSTRAINT "pack_exists" FOREIGN KEY ("pack") REFERENCES "pack"("pack") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shipment_details" ADD CONSTRAINT "shipment_exists" FOREIGN KEY ("shipment_id") REFERENCES "shipment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
