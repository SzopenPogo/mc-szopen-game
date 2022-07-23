import { model, Schema } from "mongoose";
import validator from "validator";
import { passwordRegExp, PASSWORD_MIN_LENGTH } from "../constants/account/password";
import { IAccountModel } from "../interfaces/account/IAccountModel";
import { IAccountStatics } from "../interfaces/account/IAccountStatics";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../constants/account/token";
import { createErrorMessage } from "../utils/messages/createErrorMessage";
import { createInfoMessage } from "../utils/messages/createInfoMessage";
import { validateUpdateOperator } from "../utils/validation/validateUpdateOperator";
import { validatePassword } from "../utils/validation/validatePassword";

const accountSchema = new Schema<IAccountModel, IAccountStatics>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value: string) {
      if (!validator.isEmail(value)) {
        throw new Error('Wrong email format (email@email.com)');
      }
    }
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: PASSWORD_MIN_LENGTH,
    validate(value: string) {
      if (!passwordRegExp.test(value)) {
        throw new Error('Weak password');
      }
    }
  },

  isActive: {
    type: Boolean,
    default: true
  },

  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

//Not expose data
accountSchema.methods.toJSON = function () {
  const account = this;

  const accountObject = account.toObject();

  delete accountObject.password;
  delete accountObject.__v;
  delete accountObject.tokens;

  return accountObject;
}

//VIRTUAL
//Character
accountSchema.virtual('characterRef', {
  ref: 'Character',
  localField: '_id',
  foreignField: 'accountId'
});

//STATICS
//findByCredentials
accountSchema.statics.findByCredentials = async (email: string, password: string) => {
  const account = await Account.findOne({ email });
  if (!account) {
    throw new Error('Account not found');
  }

  const isPasswordValid = await bcryptjs.compare(password, account.password);
  if (!isPasswordValid) {
    throw new Error('Invalid Password');
  }

  return account;
}

//METHODS
//generateAuthToken
accountSchema.methods.generateAuthToken = async function (this: IAccountModel) {
  const account = this;
  const token = jwt.sign({ _id: account._id }, TOKEN_SECRET);
  
  account.tokens = account.tokens.concat({ token });
  
  await account.save();
  return token;
}

//METHODS
//clearTokens
accountSchema.methods.clearTokens = async function (this: IAccountModel) {
  const account = this;
  account.tokens = [];
  await account.save();
}

//METHODS
//editUserData
accountSchema.methods.editUserData = async function (
  this: IAccountModel,
  requestBody: any,
  allowedUpdates: Array<string>,
  currentPassword?: string
) {
  const account = this;
  let updates = Object.keys(requestBody);
  
  if (currentPassword) {
    const isPasswordValid = await validatePassword(currentPassword, account.password);
    if (!isPasswordValid.isValid) {
      const {message: errorMessage} = isPasswordValid.message;
      return errorMessage;
    }

    const currentPasswordVariableName = Object.keys({currentPassword})[0]
    updates = updates.filter(update => update !== currentPasswordVariableName);
  }

  const isValidOperator = validateUpdateOperator(allowedUpdates, updates)
  if (!isValidOperator.isValid) {
    const {message: errorMessage} = isValidOperator.message;
    return errorMessage;
  }

  updates.forEach(update => {
    account[update] = requestBody[update];
  });

  await account.save();
  const infoMessage = createInfoMessage(200, 'Data updated');
  
  return infoMessage;
}

//METHODS
//setInactive
accountSchema.methods.setInactive = async function (this: IAccountModel) {
  const account = this;
  account.isActive = false;
  await account.clearTokens();
  await account.save();
}

//METHODS
//setActive
accountSchema.methods.setActive = async function (this: IAccountModel) {
  const account = this;
  account.isActive = true;
  await account.save();
}

//PRE
//Hash password
accountSchema.pre('save', async function (next) {
  const account = this;
  if (account.isModified('password')) {
    account.password = await bcryptjs.hash(account.password, 8);
  }

  next();
});

const Account = model<IAccountModel, IAccountStatics>('Account', accountSchema);
export default Account;