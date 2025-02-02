const usersRepo = require('./user.mongo.repository');

const getAll = () => usersRepo.getAll();
const get = id => usersRepo.get(id);
const create = user => usersRepo.create(user);
const update = (id, user) => usersRepo.update(id, user);
const remove = id => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
