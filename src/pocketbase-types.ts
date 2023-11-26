/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
  projets_video = 'projets_video',
  Users = 'users'
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString
  created: IsoDateString
  updated: IsoDateString
  collectionId: string
  collectionName: Collections
  expand?: T
}

export type AuthSystemFields<T = never> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum categorieOptions {
  'projet personnel' = 'projet personnel',
  'projet professionnel' = 'projet professionnel',
  'projet scolaire' = 'projet scolaire'
}

export type projets_videoRecord<Tproduits = unknown> = {
  titre?: string
  url?: string
  cover?: string
  context?: string
  result?: string
  photo_bonus?: string
  role?: string
  categorie?: categorieOptions
  date?: string
}

export type UsersRecord = {
  avatar?: string
  name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type projets_videoResponse<Texpand = unknown> = Required<projets_videoRecord> &
  AuthSystemFields<Texpand>

export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  projets_video: projets_videoRecord
  users: UsersRecord
}

export type CollectionResponses = {
  projets_video: projets_videoResponse
  users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'projets_video'): RecordService<projets_videoResponse>
  collection(idOrName: 'users'): RecordService<UsersResponse>
}
