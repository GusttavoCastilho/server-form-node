import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';


const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    const { name, email, phone, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, phone, password });

    const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };

      return res.json(userWithoutPassword);
})

export default usersRouter;
