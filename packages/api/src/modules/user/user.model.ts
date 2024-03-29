import { Model, DataTypes, NOW } from 'sequelize';
import { sequelize } from '../../database/sequelizeInstance';
import { logger } from '../../helpers/logger';
import { guildRanks } from '../../constants/guildRanks';
import { GuildApplications } from '../applications/applications.model';

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public userRank!: string;
  public userAvatar!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public authenticated!: boolean;
  public authCodeId!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRank: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: guildRanks.STUDENCIAK,
    },
    userAvatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        'https://res.cloudinary.com/survikrowa/image/upload/v1597051975/sq6iqojgm6qlm5lqcifv.jpg',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    authenticated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    authCodeId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'users',
    modelName: 'users',
    sequelize: sequelize,
  },
);

User.hasOne(GuildApplications, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
GuildApplications.belongsTo(User);

export class ActivationCodes extends Model {
  public authCodeId!: number;
  public activationCode!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ActivationCodes.init(
  {
    authCodeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    activationCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  },
  {
    tableName: 'activationCodes',
    sequelize,
  },
);

export const checkDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Success db connection');
  } catch (error) {
    console.log(error);
    logger.log({ level: 'error', message: error });
    process.exit();
  }
};
