const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { asyncHandleError } = require('./../../common/error-handling');

router.route('/').get(
  asyncHandleError(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  asyncHandleError(async (req, res) => {
    const user = await usersService.get(req.params.id);
    res.json(User.toResponse(user));
  })
);

router.route('/').post(
  asyncHandleError(async (req, res) => {
    const user = await usersService.create(req.body);
    res.json(User.toResponse(user));
  })
);

router.route('/:id').put(
  asyncHandleError(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body);
    res.json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  asyncHandleError(async (req, res) => {
    await usersService.remove(req.params.id);
    res.sendStatus(204);
  })
);

module.exports = router;
