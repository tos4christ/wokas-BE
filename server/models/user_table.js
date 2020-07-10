// The database function to create the users table, it should only be run once
const createUsers =  `CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  creation_date DATE
)`;

export default createUsers;
