import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DatailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryControllers';
import { CreateProductController } from './controllers/product/CreateProductController';

import uploadConfig from './config/multer';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// --- ROTAS USERS ---
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// --- ROTAS CATEGORY ---
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// --- ROTAS PRODUCT ---
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product/:id', isAuthenticated, new ListByCategoryController().handle);

export { router };