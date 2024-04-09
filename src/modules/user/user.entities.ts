import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //默认主键 自增
  id: number;

  @Column({ length: 20 })
  username: string;

  // 从数据库获取用户信息时 不读取password，可以设置长度30个字节
  @Column({
    select: false,
    length: 100,
  })
  password: string;

  @Column({
    default: 'This is My KeepAccount 1',
  })
  signature: string;

  @Column({
    default: 'https://bythewayer.com/logo.png',
  })
  avatar: string;

  @CreateDateColumn()
  ctime: Date;
}
