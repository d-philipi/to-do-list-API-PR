CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "photo" TEXT NOT NULL,
);

CREATE TABLE "tasks" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "text" TEXT NOT NULL,
    "done" TEXT DEFAULT "FALSE",
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);