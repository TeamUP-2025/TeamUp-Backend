import { pgTable, integer, bigint, boolean, timestamp, foreignKey, unique, uuid, varchar, text, index, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const gooseDbVersion = pgTable("goose_db_version", {
	id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "goose_db_version_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	versionId: bigint("version_id", { mode: "number" }).notNull(),
	isApplied: boolean("is_applied").notNull(),
	tstamp: timestamp({ mode: 'string' }).defaultNow().notNull(),
});

export const repo = pgTable("repo", {
	repoid: uuid().defaultRandom().primaryKey().notNull(),
	uid: uuid(),
	name: varchar().notNull(),
	url: varchar().notNull(),
	description: varchar(),
	star: integer(),
	fork: integer(),
	lastUpdated: timestamp("last_updated", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	language: varchar(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.uid],
			foreignColumns: [user.uid],
			name: "repo_uid_fkey"
		}),
	unique("unique_user_repo").on(table.uid, table.name),
]);

export const goal = pgTable("goal", {
	projectid: uuid(),
	name: varchar().notNull(),
	goalid: uuid().defaultRandom().primaryKey().notNull(),
	description: varchar(),
}, (table) => [
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "goal_projectid_fkey"
		}),
]);

export const project = pgTable("project", {
	projectid: uuid().defaultRandom().primaryKey().notNull(),
	title: varchar().notNull(),
	description: varchar().notNull(),
	repoid: uuid(),
	status: varchar(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	licenseid: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.repoid],
			foreignColumns: [repo.repoid],
			name: "project_repoid_fkey"
		}),
	foreignKey({
			columns: [table.licenseid],
			foreignColumns: [license.licenseid],
			name: "project_licenseid_fkey"
		}),
	unique("project_title_key").on(table.title),
]);

export const license = pgTable("license", {
	licenseid: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar().notNull(),
	description: varchar().notNull(),
	permission: varchar(),
	condition: varchar(),
	limitation: varchar().notNull(),
}, (table) => [
	unique("license_name_key").on(table.name),
]);

export const donation = pgTable("donation", {
	donationid: uuid().defaultRandom().primaryKey().notNull(),
	uid: uuid().notNull(),
	projectid: uuid().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
	foreignKey({
			columns: [table.uid],
			foreignColumns: [user.uid],
			name: "donation_uid_fkey"
		}),
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "donation_projectid_fkey"
		}),
]);

export const application = pgTable("application", {
	appid: uuid().defaultRandom().primaryKey().notNull(),
	uid: uuid().notNull(),
	projectid: uuid().notNull(),
	coverletter: varchar(),
}, (table) => [
	foreignKey({
			columns: [table.uid],
			foreignColumns: [user.uid],
			name: "application_uid_fkey"
		}),
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "application_projectid_fkey"
		}),
]);

export const tag = pgTable("tag", {
	tagid: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar().notNull(),
});

export const user = pgTable("user", {
	uid: uuid().defaultRandom().primaryKey().notNull(),
	login: varchar().notNull(),
	name: varchar().notNull(),
	avatar: varchar(),
	location: varchar(),
	token: varchar().notNull(),
	bio: text(),
	followers: integer().default(0),
	following: integer().default(0),
	publicRepos: integer("public_repos").default(0),
	totalPrivateRepos: integer("total_private_repos").default(0),
	htmlUrl: varchar("html_url"),
	lastUpdated: timestamp("last_updated", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
	unique("user_login_key").on(table.login),
]);

export const chatMessage = pgTable("ChatMessage", {
	messageId: uuid().defaultRandom().primaryKey().notNull(),
	projectId: uuid().notNull(),
	login: varchar().notNull(),
	content: text().notNull(),
	createdAt: timestamp({ precision: 6, withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("idx_chatmessage_project_user_created").using("btree", table.projectId.asc().nullsLast().op("text_ops"), table.login.asc().nullsLast().op("text_ops"), table.createdAt.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [project.projectid],
			name: "fk_chatmessage_project"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.login],
			foreignColumns: [user.login],
			name: "fk_chatmessage_user_login"
		}).onDelete("restrict"),
]);

export const projectTag = pgTable("projectTag", {
	projectid: uuid().notNull(),
	tagid: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "projectTag_projectid_fkey"
		}),
	foreignKey({
			columns: [table.tagid],
			foreignColumns: [tag.tagid],
			name: "projectTag_tagid_fkey"
		}),
	primaryKey({ columns: [table.projectid, table.tagid], name: "projectTag_pkey"}),
]);

export const userTag = pgTable("userTag", {
	uid: uuid().notNull(),
	tagid: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uid],
			foreignColumns: [user.uid],
			name: "userTag_uid_fkey"
		}),
	foreignKey({
			columns: [table.tagid],
			foreignColumns: [tag.tagid],
			name: "userTag_tagid_fkey"
		}),
	primaryKey({ columns: [table.uid, table.tagid], name: "userTag_pkey"}),
]);

export const teammember = pgTable("teammember", {
	projectid: uuid().notNull(),
	uid: uuid().notNull(),
	role: varchar().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "teammember_projectid_fkey"
		}),
	foreignKey({
			columns: [table.uid],
			foreignColumns: [user.uid],
			name: "teammember_uid_fkey"
		}),
	primaryKey({ columns: [table.projectid, table.uid], name: "teammember_pkey"}),
]);

export const roadmap = pgTable("roadmap", {
	projectid: uuid().notNull(),
	roadmap: varchar().notNull(),
	description: varchar().notNull(),
	status: varchar().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectid],
			foreignColumns: [project.projectid],
			name: "roadmap_projectid_fkey"
		}),
	primaryKey({ columns: [table.projectid, table.roadmap], name: "roadmap_pkey"}),
]);
