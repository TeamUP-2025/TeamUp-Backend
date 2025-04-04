-- +goose no transaction
-- +goose Up
-- +goose StatementBegin
CREATE TABLE "user" (
    uId uuid DEFAULT gen_random_uuid (),
    login VARCHAR UNIQUE NOT NULL,
    name VARCHAR NOT NULL,
    avatar VARCHAR NULL,
    location VARCHAR NULL,
    token VARCHAR NOT NULL,
    PRIMARY KEY (uId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "license" (
    licenseId uuid DEFAULT gen_random_uuid (),
    name VARCHAR UNIQUE NOT NULL,
    description VARCHAR NOT NULL,
    permission VARCHAR NULL,
    condition VARCHAR NULL,
    limitation VARCHAR NOT NULL,
    PRIMARY KEY (licenseId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "tag" (
    tagId uuid DEFAULT gen_random_uuid (),
    name VARCHAR NOT NULL,
    PRIMARY KEY (tagId)
);
-- +goose StatementEnd

-- +goose StatementBegin
-- Note: Added REFERENCES "user" (uId)
CREATE TABLE "repo" (
    repoId uuid DEFAULT gen_random_uuid (),
    uId uuid NULL REFERENCES "user" (uId), -- Corrected FK reference
    name VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    description VARCHAR NULL, -- Corrected typo
    star INT NULL,
    fork INT NULL,
    PRIMARY KEY (repoId)
);
-- +goose StatementEnd

-- +goose StatementBegin
-- Note: Added REFERENCES "license" (licenseId) and corrected repoId reference
CREATE TABLE "project" (
    projectId uuid DEFAULT gen_random_uuid (),
    title VARCHAR UNIQUE NOT NULL,
    description VARCHAR NOT NULL,
    -- Assuming repoId should reference the repo table
    repoId uuid NULL REFERENCES "repo" (repoId),
    status VARCHAR NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    licenseId uuid REFERENCES "license" (licenseId),
    PRIMARY KEY (projectId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "teammember" (
    projectId uuid NOT NULL REFERENCES project (projectId),
    uId uuid NOT NULL REFERENCES "user" (uId),
    role VARCHAR NOT NULL,
    PRIMARY KEY (projectId, uId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "application" (
    appId uuid DEFAULT gen_random_uuid (),
    uId uuid NOT NULL REFERENCES "user" (uId),
    projectId uuid NOT NULL REFERENCES project (projectId),
    coverLetter VARCHAR NULL,
    PRIMARY KEY (appId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "donation" (
    donationId uuid DEFAULT gen_random_uuid (),
    uId uuid NOT NULL REFERENCES "user" (uId),
    projectId uuid NOT NULL REFERENCES project (projectId),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (donationId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "goal" (
    projectId uuid REFERENCES project (projectId),
    name VARCHAR NOT NULL,
    goalId uuid DEFAULT gen_random_uuid(),
    PRIMARY KEY (goalId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "projectTag" (
    projectId uuid NOT NULL REFERENCES project (projectId),
    tagId uuid NOT NULL REFERENCES tag (tagId),
    PRIMARY KEY (projectId, tagId)
);
-- +goose StatementEnd

-- +goose StatementBegin
CREATE TABLE "roadmap" (
    projectId uuid NOT NULL REFERENCES project (projectId),
    roadmap VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    PRIMARY KEY (projectId, roadmap)
);
-- +goose StatementEnd

-- +goose StatementBegin
-- Note: Corrected column name uId and reference
CREATE TABLE "userTag" (
    uId uuid NOT NULL REFERENCES "user" (uId), -- Corrected column name and FK reference
    tagId uuid NOT NULL REFERENCES tag (tagId),
    PRIMARY KEY (uId, tagId)
);
-- +goose StatementEnd

ALTER TABLE "user"
ADD COLUMN bio TEXT,
ADD COLUMN followers INTEGER DEFAULT 0,
ADD COLUMN following INTEGER DEFAULT 0,
ADD COLUMN public_repos INTEGER DEFAULT 0,
ADD COLUMN total_private_repos INTEGER DEFAULT 0,
ADD COLUMN html_url VARCHAR;

-- +goose StatementBegin
ALTER TABLE "user"
ADD COLUMN last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "repo"
ADD COLUMN last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
-- +goose StatementEnd

ALTER TABLE "repo"
ADD CONSTRAINT unique_user_repo UNIQUE (uid, name);

ALTER TABLE "repo"
ADD COLUMN language VARCHAR;

-- +goose StatementBegin
ALTER TABLE "repo"
ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE;
-- +goose StatementEnd

-- +goose Up
-- +goose StatementBegin
ALTER TABLE "goal"
ADD COLUMN description VARCHAR;
-- +goose StatementEnd

-- +goose Up
-- +goose StatementBegin
ALTER TABLE "donation"
ADD COLUMN amount NUMERIC NOT NULL DEFAULT 0;
-- +goose StatementEnd