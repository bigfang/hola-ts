/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  code!: string

  @Column({ unique: true })
  shortname!: string

  @Column()
  lbrq!: number
}
