/**
 * @fileOverview users routes
 *
 * @author Jacob Nouwatin
 *
 * @requires NPM:express
 * @requires ../controllers/Requests
 * @requires ../middleware
 */

import { Router } from 'express';

import Requests from '../controllers/Requests';
import middleware from '../middleware';

const requestsController = new Requests();
const routes = new Router();

routes.use(middleware.auth.authenticateUser);

routes.post(
  '/',
  middleware.validate.createRequest,
  requestsController.create
);

export default routes;