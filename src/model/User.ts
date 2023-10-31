import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Color } from "./Color";

@Table({
  tableName: "users",
  modelName: "User",
})
export class User extends Model {
  @Column
  name!: string;

  @Column
  surname!: string;

  @ForeignKey(() => Color)
  @Column
  carColorId!: number;

  @BelongsTo(() => Color)
  carColor!: Color;
}
