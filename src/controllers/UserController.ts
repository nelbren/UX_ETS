import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {
  static GetAll  = async(req: Request, resp: Response) => {
    const userRepository = AppDataSource.getRepository(User)
    try {
      const user = await userRepository.find()
      if(user.length > 0)
        resp.json(user)
      else  
        resp.status(404).send('No hay registros!')
    }
    catch (e) {
      resp.status(404).send(`e => ${e}`)
    }
  }    
}

export default UserController