import { FileRepository } from '../../files/domain/repositories/FileRepository'
import { FilesMockData } from './FileMockData'
import { File } from '../../files/domain/models/File'
import { FilesCountInfo } from '../../files/domain/models/FilesCountInfo'
import { FilesCountInfoMother } from '../../../tests/component/files/domain/models/FilesCountInfoMother'

export class FileMockRepository implements FileRepository {
  // eslint-disable-next-line unused-imports/no-unused-vars
  getAllByDatasetPersistentId(persistentId: string, version?: string): Promise<File[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FilesMockData())
      }, 1000)
    })
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  getCountInfoByDatasetPersistentId(
    persistentId: string,
    version?: string
  ): Promise<FilesCountInfo> {
    // TODO - implement using js-dataverse
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FilesCountInfoMother.create())
      }, 1000)
    })
  }
}
