/**
 * Create a new user.
 * @param {string} name
 * @param {string} email
 * @returns {Promise<{ id: string, name: string, email: string, createdAt: string }>}
 */
async function createUser(name, email) {
  if (!name || !email) {
    throw new TypeError("createUser: name and email are required");
  }
  return {
    id: cryptoRandomId(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Look up a user by id.
 * @param {string} id
 * @returns {Promise<object | null>}
 */
async function getUser(id) {
  // elided — demo stub
  return null;
}

function cryptoRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

module.exports = { createUser, getUser };
