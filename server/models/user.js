// User schema queries to be used in the users controller for all user functions
const user_schema = {};

user_schema.add_user = `INSERT INTO users(name, address, phone, email, creation_date) VALUES($1, $2, $3, $4, $5)`;

user_schema.update = `UPDATE users SET()`;

export default user_schema;
