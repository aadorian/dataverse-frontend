import { FileType } from './File'

export class FileCriteria {
  constructor(
    public readonly sortBy: FileSortByOption = FileSortByOption.NAME_AZ,
    public readonly filterByType?: FileType,
    public readonly filterByAccess?: FileAccessOption,
    public readonly filterByTag?: FileTag
  ) {}

  withSortBy(sortBy: FileSortByOption): FileCriteria {
    return new FileCriteria(sortBy, this.filterByType, this.filterByAccess, this.filterByTag)
  }

  withFilterByType(filterByType: string | undefined): FileCriteria {
    const newFilterByType = filterByType === undefined ? undefined : new FileType(filterByType)

    return new FileCriteria(this.sortBy, newFilterByType, this.filterByAccess, this.filterByTag)
  }

  withFilterByAccess(filterByAccess: FileAccessOption | undefined): FileCriteria {
    return new FileCriteria(this.sortBy, this.filterByType, filterByAccess, this.filterByTag)
  }

  withFilterByTag(filterByTag: string | undefined): FileCriteria {
    const newFilterByTag = filterByTag === undefined ? undefined : new FileTag(filterByTag)

    return new FileCriteria(this.sortBy, this.filterByType, this.filterByAccess, newFilterByTag)
  }
}

export enum FileSortByOption {
  NAME_AZ = 'name_az',
  NAME_ZA = 'name_za',
  NEWEST = 'newest',
  OLDEST = 'oldest',
  SIZE = 'size',
  TYPE = 'type'
}

export enum FileAccessOption {
  PUBLIC = 'public',
  RESTRICTED = 'restricted',
  EMBARGOED = 'embargoed_public',
  EMBARGOED_RESTRICTED = 'embargoed_restricted'
}

export class FileTag {
  constructor(readonly value: string) {}

  toDisplayFormat(): string {
    return this.value[0].toUpperCase() + this.value.substring(1)
  }
}
