import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS server (
      id TEXT NOT NULL PRIMARY KEY,
      serverName TEXT NOT NULL,
      hostname TEXT NOT NULL,
      port INTEGER NOT NULL,
      username TEXT NOT NULL,
      authMethod TEXT NOT NULL,
      remotePath TEXT NOT NULL,
      provider TEXT,
      createdAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS deployment (
      id TEXT NOT NULL PRIMARY KEY,
      projectName TEXT NOT NULL,
      localPath TEXT NOT NULL,
      serverId TEXT NOT NULL,
      status TEXT NOT NULL,
      filesTransferred INTEGER,
      deploymentDate TEXT NOT NULL,
      deploymentTime TEXT NOT NULL,
      notes TEXT,
      createdAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS backup (
      id TEXT NOT NULL PRIMARY KEY,
      backupName TEXT NOT NULL,
      serverId TEXT NOT NULL,
      backupSize INTEGER,
      backupType TEXT NOT NULL,
      status TEXT NOT NULL,
      backupDate TEXT NOT NULL,
      backupTime TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
