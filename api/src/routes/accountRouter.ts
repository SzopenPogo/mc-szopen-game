import { Router } from "express";
import accountEdit from "../controllers/account/actions/accountEdit";
import accountGetMe from "../controllers/account/actions/accountGetMe";
import accountLogin from "../controllers/account/actions/accountLogin";
import accountLogout from "../controllers/account/actions/accountLogout";
import accountLogoutAll from "../controllers/account/actions/accountLogoutAll";
import accountRegister from "../controllers/account/actions/accountRegister";
import auth from "../middleware/auth";

const accountRouter = Router();

// TYPE: POST /account/register
// DESCRIPTION: Register new account
// ACCESS: PUBLIC
accountRouter.post('/register', accountRegister);

// TYPE: POST /account/login
// DESCRIPTION: Account Login
// ACCESS: PUBLIC
accountRouter.post('/login', accountLogin);

// TYPE: POST /account/logout
// DESCRIPTION: Account logout
// ACCESS: PRIVATE
accountRouter.post('/logout', auth, accountLogout);

// TYPE: POST /account/logoutAll
// DESCRIPTION: Logout from all devices
// ACCESS: PRIVATE
accountRouter.post('/logoutAll', auth, accountLogoutAll);

// TYPE: GET /account/me
// DESCRIPTION: Get account owner profile data
// ACCESS: PRIVATE
accountRouter.get('/me', auth, accountGetMe);

// TYPE: PATCH /account/edit/me
// DESCRIPTION: Edit owner accout
// ACCESS: PRIVATE
accountRouter.patch('/edit/me', auth, accountEdit);

export default accountRouter;