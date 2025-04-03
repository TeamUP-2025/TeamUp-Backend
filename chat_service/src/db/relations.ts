import { relations } from "drizzle-orm/relations";
import { user, repo, project, goal, license, donation, application, chatMessage, projectTag, tag, userTag, teammember, roadmap } from "./schema";

export const repoRelations = relations(repo, ({one, many}) => ({
	user: one(user, {
		fields: [repo.uid],
		references: [user.uid]
	}),
	projects: many(project),
}));

export const userRelations = relations(user, ({many}) => ({
	repos: many(repo),
	donations: many(donation),
	applications: many(application),
	chatMessages: many(chatMessage),
	userTags: many(userTag),
	teammembers: many(teammember),
}));

export const goalRelations = relations(goal, ({one}) => ({
	project: one(project, {
		fields: [goal.projectid],
		references: [project.projectid]
	}),
}));

export const projectRelations = relations(project, ({one, many}) => ({
	goals: many(goal),
	repo: one(repo, {
		fields: [project.repoid],
		references: [repo.repoid]
	}),
	license: one(license, {
		fields: [project.licenseid],
		references: [license.licenseid]
	}),
	donations: many(donation),
	applications: many(application),
	chatMessages: many(chatMessage),
	projectTags: many(projectTag),
	teammembers: many(teammember),
	roadmaps: many(roadmap),
}));

export const licenseRelations = relations(license, ({many}) => ({
	projects: many(project),
}));

export const donationRelations = relations(donation, ({one}) => ({
	user: one(user, {
		fields: [donation.uid],
		references: [user.uid]
	}),
	project: one(project, {
		fields: [donation.projectid],
		references: [project.projectid]
	}),
}));

export const applicationRelations = relations(application, ({one}) => ({
	user: one(user, {
		fields: [application.uid],
		references: [user.uid]
	}),
	project: one(project, {
		fields: [application.projectid],
		references: [project.projectid]
	}),
}));

export const chatMessageRelations = relations(chatMessage, ({one}) => ({
	project: one(project, {
		fields: [chatMessage.projectId],
		references: [project.projectid]
	}),
	user: one(user, {
		fields: [chatMessage.login],
		references: [user.login]
	}),
}));

export const projectTagRelations = relations(projectTag, ({one}) => ({
	project: one(project, {
		fields: [projectTag.projectid],
		references: [project.projectid]
	}),
	tag: one(tag, {
		fields: [projectTag.tagid],
		references: [tag.tagid]
	}),
}));

export const tagRelations = relations(tag, ({many}) => ({
	projectTags: many(projectTag),
	userTags: many(userTag),
}));

export const userTagRelations = relations(userTag, ({one}) => ({
	user: one(user, {
		fields: [userTag.uid],
		references: [user.uid]
	}),
	tag: one(tag, {
		fields: [userTag.tagid],
		references: [tag.tagid]
	}),
}));

export const teammemberRelations = relations(teammember, ({one}) => ({
	project: one(project, {
		fields: [teammember.projectid],
		references: [project.projectid]
	}),
	user: one(user, {
		fields: [teammember.uid],
		references: [user.uid]
	}),
}));

export const roadmapRelations = relations(roadmap, ({one}) => ({
	project: one(project, {
		fields: [roadmap.projectid],
		references: [project.projectid]
	}),
}));