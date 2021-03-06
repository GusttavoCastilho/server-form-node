import { Router } from 'express';

import AuthenticateService from '../services/AuthenticateService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    const authenticateUser = new AuthenticateService();

    const { user, token } = await authenticateUser.execute({
        email, password
    });

    const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at,
        updated_at: user.updated_at
      };

      return res.json({ user:userWithoutPassword, token });
})

export default sessionsRouter;
