/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  code: string

  @Column()
  shortname: string

  @Column()
  lbrq: number
}
