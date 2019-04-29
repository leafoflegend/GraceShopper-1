import {
  Sequelize,
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  DataType
} from "sequelize-typescript";

const conn = new Sequelize(process.env.DATABASE_URL);

@Table({
  timestamps: true,
  tableName: "user"
})
export class User extends Model<User> {
  @Column
  name: string = "";

  @Column
  age: number = 0;
}
