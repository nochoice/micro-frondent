import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient()

// middleware that is specific to this router
router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
  next()
})

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    const user = await prisma.user
      .findUnique({
        where: {
          id: Number(id),
        },
      })
  
    res.json(user)
});

router.post('/', async (req, res) => {
    const { email, name } = req.body;
  
    const result = await prisma.user.create({
        data: {
          name,
          email
        },
      })
      res.json(result)
});

export default router;