import {
  Sequelize,
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  DataType
} from "sequelize-typescript";

const conn = new Sequelize(typeof process.env.DATABASE_URL === 'string' ? process.env.DATABASE_URL : '');

@Table({
  timestamps: true,
  tableName: "user"
})
class User extends Model<User> {
  @Column({
    allowNull: false,
    defaultValue: '',
  })
  name!: string;

  @Column({
    allowNull: false,
    defaultValue: 0,
  })
  age!: number;
}

export {
  User,
  conn,
}
