import { getAccount } from './getAccount'
import { updateAccountInformation } from './updateAccount'
import { updateAccountProfilePicture } from './updateAccountProfilePicture'

export const databaseAccountActions = {
  updateAccount: updateAccountInformation,
  updateProfilePicture: updateAccountProfilePicture,
  getAccount: getAccount,
}
