import { guildApplicationSchema } from './applications.schema';
import { GuildApplications } from './applications.model';
import { User } from './../user/user.model';
import { Op } from 'sequelize';

export const parseGuildApplication = async (guildApplication: typeof guildApplicationSchema) => {
  try {
    return {
      data: guildApplicationSchema.parse(guildApplication),
    };
  } catch (e) {
    return { errors: e.errors };
  }
};

export const findAllGuildApplicationsBy = (conditions?: Record<string, string>) => {
  if (conditions) {
    const findBy = Object.entries(conditions).map(([key, item]) => {
      return { [key]: item };
    });
    return GuildApplications.findAll({
      where: { findBy },
    });
  } else {
    return GuildApplications.findAll();
  }
};

export const findUserApplicationsBy = (conditions: Record<string, string>) => {
  const findBy = Object.entries(conditions).map(([key, item]) => {
    return { [key]: item };
  });
  return GuildApplications.findOne({
    where: {
      [Op.or]: findBy,
    },
    include: [User],
  });
};

export const updateApplicationStatus = ({ userId, status }: UpdateProps) => {
  return GuildApplications.update(
    {
      applicationState: status,
    },
    {
      where: {
        userId: userId,
      },
    },
  );
};

export const insertGuildApplication = (guildApplication: GuildApplcation, userId: string) => {
  return GuildApplications.create({
    ...guildApplication,
    userId,
  });
};

type UpdateProps = {
  userId: string;
  status: string;
};

type GuildApplcation = {
  igName: string;
  userDescription: string;
  age: string;
  mainAndAlts: string;
  prevExp: string;
  raidDays: string;
  uiScreen: string;
  whereDidUFindUs: string;
  prefRaidLang: string;
};
