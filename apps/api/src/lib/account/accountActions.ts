import { getAccount } from './getAccount'
import { isAccountCompleted } from './isAccountCompleted'
import { updateAccountInformation } from './updateAccount'
import { updateAccountProfilePicture } from './updateAccountProfilePicture'

export const accountActions = {
  updateAccount: updateAccountInformation,
  updateProfilePicture: updateAccountProfilePicture,
  getAccount,
  isAccountCompleted,
}
