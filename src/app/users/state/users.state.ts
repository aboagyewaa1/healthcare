import { User } from "src/app/models/user.model";

export interface UserState {
  user: User | null;
}

export const initialState : UserState = {
  user : null
}
