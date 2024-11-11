import { Router
    , Request
    , Response
    , NextFunction
 } from "express";

import { getDashboard } from "../controllers/index";

const router = Router();

router.get('/', getDashboard);


export default router;


