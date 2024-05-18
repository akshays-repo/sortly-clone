import 'dotenv/config';

import { client, db } from './config.server';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: __dirname + 'drizzle' });

// Don't forget to close the connection, otherwise the script will hang
await client.end();