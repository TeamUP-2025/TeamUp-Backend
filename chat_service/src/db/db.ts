import { drizzle } from "drizzle-orm/node-postgres";
import { user, teammember, chatMessage, project } from "./schema";
import { eq, and, lt, desc, sql } from "drizzle-orm"; // Import Drizzle operators

export const db = drizzle(process.env.DATABASE_URL!);

/**
 * Checks if a user (identified by login) is a member of a project.
 * @param projectId - The ID of the project (chat room).
 * @param userLogin - The login identifier of the user.
 * @returns True if the user is a team member, false otherwise.
 */
export async function isUserTeamMember(
  projectId: string,
  userLogin: string
): Promise<boolean> {
  console.log(
    `[DB Query - Drizzle] Checking team membership for user '${userLogin}' in project '${projectId}'`
  );
  try {
    // 1. Find the user's uid based on their login using the 'user' schema object
    const userResult = await db
      .select({ uid: user.uid }) // Select uid from the 'user' table
      .from(user) // Query the 'user' table
      .where(eq(user.login, userLogin)) // Filter by the 'login' column
      .limit(1);

    if (userResult.length === 0) {
      console.warn(
        `[DB Query - Drizzle] User with login '${userLogin}' not found for team membership check.`
      );
      return false;
    }
    const userUid = userResult[0].uid; // Get the user's UUID

    // 2. Check for membership in the teammembers table using the 'teammember' schema object
    const membershipResult = await db
      .select({ projectid: teammember.projectid }) // Select any column
      .from(teammember) // Query the 'teammember' table
      .where(
        and(
          // Use the exact column names from your schema
          eq(teammember.projectid, projectId),
          eq(teammember.uid, userUid) // Filter by the user's UUID (uid)
        )
      )
      .limit(1);

    const isMember = membershipResult.length > 0;
    console.log(
      `[DB Query - Drizzle] Membership result for user '${userLogin}' (uid: ${userUid}) in project '${projectId}': ${isMember}`
    );
    return isMember;
  } catch (error) {
    console.error(
      `[DB Query - Drizzle] Error checking team membership for user '${userLogin}', project '${projectId}':`,
      error
    );
    return false;
  }
}

/**
 * Saves a chat message to the database.
 * @param projectId - The ID of the project (chat room).
 * @param userLogin - The login identifier of the sender.
 * @param message - The content of the message.
 * @param timestamp - The time the message was created.
 */
export async function saveChatMessage(
  projectId: string,
  userLogin: string,
  message: string,
  timestamp: Date
): Promise<void> {
  console.log(
    `[DB Query - Drizzle] Attempting to save message from user '${userLogin}' in room '${projectId}'`
  );
  try {
    // Use the 'chatMessage' schema object and exact column names
    const result = await db.insert(chatMessage).values({
      projectId: projectId, // Match the exact column name from schema
      login: userLogin, // Use the 'login' column name from your schema
      content: message, // Column name from your schema
    });

    console.log(
      `[DB Query - Drizzle] Message saved successfully. Rows affected: ${result.rowCount}`
    );
  } catch (error) {
    console.error(
      `[DB Query - Drizzle] Failed to save message from user '${userLogin}' in room '${projectId}':`,
      error
    );
    // throw error; // Optional: re-throw if needed
  }
}

/**
 * Fetches chat history for a project room, optionally before a given timestamp.
 * @param projectId - The ID of the project (chat room).
 * @param beforeTimestamp - Optional timestamp to fetch messages created before this time.
 * @param limit - The maximum number of messages to retrieve.
 * @returns An object containing the messages and a flag indicating if more older messages exist.
 */
export async function getChatHistory(
  projectId: string,
  beforeTimestamp?: Date | null,
  limit: number = 20
): Promise<{
  messages: Array<{
    messageId: string;
    userId: string; // This will hold the user's login
    message: string;
    timestamp: Date;
  }>;
  hasMore: boolean;
}> {
  console.log(
    `[DB Query - Drizzle] Fetching history for project '${projectId}', before: ${beforeTimestamp}, limit: ${limit}`
  );
  try {
    // Use the 'chatMessage' schema object
    const conditions = [eq(chatMessage.projectId, projectId)];
    if (beforeTimestamp) {
      // Use the exact 'createdAt' column name
      conditions.push(lt(chatMessage.createdAt, beforeTimestamp.toISOString()));
    }

    const results = await db
      .select({
        // Select using exact column names from your schema
        messageId: chatMessage.messageId,
        userId: chatMessage.login, // Select the 'login' column, alias as 'userId' for consistency
        message: chatMessage.content, // Select the 'content' column, alias as 'message'
        timestamp: chatMessage.createdAt, // Select the 'createdAt' column, alias as 'timestamp'
      })
      .from(chatMessage) // Query the 'chatMessage' table (using the name "ChatMessage" from schema)
      .where(and(...conditions))
      .orderBy(desc(chatMessage.createdAt)) // Order by 'createdAt'
      .limit(limit + 1);

    const hasMore = results.length > limit;
    if (hasMore) {
      results.pop();
    }

    // Drizzle's select already returns objects with the specified keys,
    // but we still need to reverse for ascending order display.
    const orderedMessages = results.reverse().map((msg) => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));

    console.log(
      `[DB Query - Drizzle] Fetched ${orderedMessages.length} messages for project '${projectId}'. Has More: ${hasMore}`
    );
    // The shape of objects in orderedMessages already matches the return type
    return { messages: orderedMessages, hasMore };
  } catch (error) {
    console.error(
      `[DB Query - Drizzle] Error fetching chat history for project '${projectId}':`,
      error
    );
    return { messages: [], hasMore: false };
  }
}
