import { SinonSandbox } from 'sinon'
import { ReactElement } from 'react'
import { User } from '../../../../../src/users/domain/models/User'
import { UserMother } from '../../../users/domain/models/UserMother'
import { UserRepository } from '../../../../../src/users/domain/repositories/UserRepository'
import { Header } from '../../../../../src/sections/layout/header/Header'

export class HeaderMother {
  static withLoggedInUser(sandbox: SinonSandbox, user: User = UserMother.create()): ReactElement {
    const userRepository: UserRepository = {} as UserRepository
    userRepository.getAuthenticated = sandbox.stub().resolves(user)
    userRepository.removeAuthenticated = sandbox.stub().resolves()

    return <Header userRepository={userRepository} />
  }

  static withGuestUser(sandbox: SinonSandbox): ReactElement {
    const userRepository: UserRepository = {} as UserRepository
    userRepository.getAuthenticated = sandbox.stub().resolves()
    userRepository.removeAuthenticated = sandbox.stub().resolves()

    return <Header userRepository={userRepository} />
  }
}
